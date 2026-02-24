"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Mission Statement Generator" description="Define your organization's purpose with a clear mission statement." systemPrompt="You are a strategic branding consultant. Write a powerful, concise mission statement (1-3 sentences) that clearly communicates what the organization does, who it serves, and why it matters. Avoid jargon and cliches. Then provide 2 alternative versions. Output ONLY the mission statements, labeled Primary and Alternatives." fields={[
    { name: "company", label: "Company or organization name", type: "text", placeholder: "e.g. GreenPath Education" },
    { name: "whatYouDo", label: "What do you do?", type: "textarea", placeholder: "e.g. We provide affordable online coding courses for underserved communities" },
    { name: "whoYouServe", label: "Who do you serve?", type: "text", placeholder: "e.g. Low-income adults seeking career changes" },
    { name: "tone", label: "Tone", type: "select", placeholder: "Select tone", options: ["Inspirational", "Professional", "Bold", "Humble", "Warm"] },
  ]} buildPrompt={(v) => `Write a ${v.tone?.toLowerCase()} mission statement for ${v.company}.\n\nWhat they do: ${v.whatYouDo}\nWho they serve: ${v.whoYouServe}`} />;
}
