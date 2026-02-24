import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const EMAILS_FILE = path.join(process.cwd(), "emails.json");

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    let emails: string[] = [];
    try {
      const data = await fs.readFile(EMAILS_FILE, "utf-8");
      emails = JSON.parse(data);
    } catch {
      // file doesn't exist yet
    }

    if (!emails.includes(email)) {
      emails.push(email);
      await fs.writeFile(EMAILS_FILE, JSON.stringify(emails, null, 2));
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
