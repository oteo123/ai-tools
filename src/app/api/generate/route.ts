import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(req: NextRequest) {
  try {
    const { systemPrompt, userInput } = await req.json();

    if (!userInput?.trim()) {
      return NextResponse.json({ error: "Input required" }, { status: 400 });
    }

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2048,
      system: systemPrompt,
      messages: [{ role: "user", content: userInput }],
    });

    const result =
      message.content[0].type === "text" ? message.content[0].text : "";

    return NextResponse.json({ result });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Generation failed";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
