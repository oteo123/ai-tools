"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Press Release Generator" description="Newsworthy press releases in minutes." systemPrompt="You are a PR professional. Write press releases in standard AP style with a compelling headline, dateline, lead paragraph, body, and boilerplate. Output ONLY the press release." fields={[
    { name: "news", label: "What's the news?", type: "text", placeholder: "e.g. Company launches new AI-powered product" },
    { name: "company", label: "Company name & info", type: "text", placeholder: "e.g. TechCorp, a San Francisco-based AI startup" },
    { name: "details", label: "Key details, quotes, data", type: "textarea", placeholder: "e.g. Product saves 40% time, CEO quote: 'This changes everything', launching March 1" },
  ]} buildPrompt={(v) => `Write a press release: ${v.news}\n\nCompany: ${v.company}\n\nDetails: ${v.details}`} />;
}
