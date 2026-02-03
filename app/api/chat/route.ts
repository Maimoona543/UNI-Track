import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { question } = await req.json();
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API Key missing in .env" },
        { status: 500 }
      );
    }

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
          messages: [{ role: "user", content: question }],
          temperature: 0.7,
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

    return NextResponse.json({ result: data.choices[0].message.content });

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to get response" },
      { status: 500 }
    );
  }
}