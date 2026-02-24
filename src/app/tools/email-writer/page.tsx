"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="AI Email Writer" description="Write professional emails in seconds. Just describe what you need." systemPrompt="You are an expert email writer. Write clear, professional, well-structured emails. Output ONLY the email — no commentary." fields={[
    { name: "purpose", label: "What's the email about?", type: "text", placeholder: "e.g. Follow up on a job interview" },
    { name: "tone", label: "Tone", type: "select", placeholder: "Select tone", options: ["Professional", "Casual", "Friendly", "Formal", "Urgent"] },
    { name: "details", label: "Key details to include", type: "textarea", placeholder: "e.g. Interview was last Tuesday, position was Senior Developer at Acme Corp" },
  ]} buildPrompt={(v) => `Write a ${v.tone?.toLowerCase()} email about: ${v.purpose}\n\nDetails: ${v.details}`} />;
}
