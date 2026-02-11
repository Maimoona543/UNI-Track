import { NextResponse } from "next/server";
import crypto from "crypto";

// In-memory store (use Redis/DB for production)
const questionHistory = new Map<string, Set<string>>();

function hashQuestion(q: string): string {
  return crypto.createHash("md5").update(q.toLowerCase().trim()).digest("hex");
}

export async function POST(req: Request) {
  try {
    const { subjects, userId = "default" } = await req.json();
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API Key missing in .env" },
        { status: 500 }
      );
    }

    // Get user's question history
    if (!questionHistory.has(userId)) {
      questionHistory.set(userId, new Set());
    }
    const userHistory = questionHistory.get(userId)!;

    let attempts = 0;
    const maxAttempts = 3;
    let uniqueQuestions: any[] = [];

    while (uniqueQuestions.length < 30 && attempts < maxAttempts) {
      attempts++;

      const seed = Math.floor(Math.random() * 1000000);
      const variation = [
        "Include case studies",
        "Focus on advanced concepts",
        "Mix beginner and expert level",
        "Add scenario-based questions",
        "Include analytical questions"
      ][attempts % 5];

      const prompt = `
Generate EXACTLY ${30 - uniqueQuestions.length} UNIQUE multiple-choice questions.
Seed: ${seed}
Variation: ${variation}
Attempt: ${attempts}

Subjects: ${subjects.join(", ")}

CRITICAL: Make questions COMPLETELY DIFFERENT and CREATIVE.
- Use diverse question formats
- Avoid common/obvious questions
- Include real-world applications
- Mix difficulty levels randomly

JSON format:
{
  "questions": [
    {
      "question": "string",
      "options": ["A", "B", "C", "D"],
      "answer": "correct option text"
    }
  ]
}
`;

      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [{ role: "user", content: prompt }],
            temperature: 1.0,
            top_p: 0.95,
            response_format: { type: "json_object" },
          }),
        }
      );

      const data = await response.json();
      const parsed = JSON.parse(data.choices[0].message.content);

      // Filter out duplicates
      for (const q of parsed.questions) {
        const hash = hashQuestion(q.question);
        if (!userHistory.has(hash) && uniqueQuestions.length < 30) {
          uniqueQuestions.push(q);
          userHistory.add(hash);
        }
      }
    }

    // Clear history after 100 questions to allow eventual reuse
    if (userHistory.size > 100) {
      const oldest = Array.from(userHistory).slice(0, 50);
      oldest.forEach(hash => userHistory.delete(hash));
    }

    return NextResponse.json(uniqueQuestions.slice(0, 30));

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate questions" },
      { status: 500 }
    );
  }
}