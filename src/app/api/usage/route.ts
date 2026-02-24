import { NextRequest, NextResponse } from "next/server";

const usage = new Map<string, number>();

export async function POST(req: NextRequest) {
  const { toolSlug, userId } = await req.json();
  const key = `${userId}:${toolSlug}`;
  const count = (usage.get(key) || 0) + 1;
  usage.set(key, count);
  return NextResponse.json({ count, limit: 5, remaining: Math.max(0, 5 - count) });
}

export async function GET(req: NextRequest) {
  const toolSlug = req.nextUrl.searchParams.get("tool");
  const userId = req.nextUrl.searchParams.get("user");
  const key = `${userId}:${toolSlug}`;
  const count = usage.get(key) || 0;
  return NextResponse.json({ count, limit: 5, remaining: Math.max(0, 5 - count) });
}
