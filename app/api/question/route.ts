import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { subjects } = await req.json();
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API Key missing in .env" },
        { status: 500 }
      );
    }

    // 🔁 Random seed to force different questions every time
    const seed = Math.floor(Math.random() * 1000000);

    const prompt = `
Seed: ${seed}

Generate EXACTLY 30 UNIQUE multiple-choice questions.
Not more. Not less. EXACTLY 30.

Subjects: ${subjects.join(", ")}

Rules:
- Questions MUST be different on every request
- Randomize difficulty (easy, medium, hard)
- Do NOT repeat questions
- Each question must have 4 options
- Answer must match one option EXACTLY
- Return ONLY valid JSON (no text, no explanation)

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
          temperature: 0.8, // 🔥 IMPORTANT
          response_format: { type: "json_object" },
        }),
      }
    );

    const data = await response.json();

    if (!data?.choices?.[0]?.message?.content) {
      return NextResponse.json(
        { error: "Groq response missing content" },
        { status: 500 }
      );
    }

    const parsed = JSON.parse(data.choices[0].message.content);

    // 🛡️ Safety: enforce exactly 30
    const safeQuestions = parsed.questions.slice(0, 30);

    return NextResponse.json(safeQuestions);

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate questions" },
      { status: 500 }
    );
  }
}
