import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const EMAILS_FILE = path.join(process.cwd(), "emails.json");

export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("key");

  if (!key || key !== process.env.ADMIN_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await fs.readFile(EMAILS_FILE, "utf-8");
    const emails: string[] = JSON.parse(data);

    return NextResponse.json({
      count: emails.length,
      emails,
    });
  } catch {
    // File doesn't exist — no subscribers yet
    return NextResponse.json({
      count: 0,
      emails: [],
    });
  }
}
