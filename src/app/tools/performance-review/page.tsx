"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Performance Review Writer" description="Write constructive, professional performance reviews." systemPrompt="You are an experienced HR professional and people manager. Write a balanced, specific performance review that highlights strengths, acknowledges achievements with examples, identifies areas for growth constructively, and sets clear goals. Use professional yet warm language. Output ONLY the performance review." fields={[
    { name: "name", label: "Employee name & role", type: "text", placeholder: "e.g. Sarah Chen, Marketing Manager" },
    { name: "rating", label: "Overall performance", type: "select", placeholder: "Select rating", options: ["Exceeds expectations", "Meets expectations", "Needs improvement", "Below expectations"] },
    { name: "strengths", label: "Key strengths & achievements", type: "textarea", placeholder: "e.g. Led Q3 campaign that increased signups 40%, great team collaboration" },
    { name: "improvements", label: "Areas for improvement", type: "textarea", placeholder: "e.g. Time management on multi-project deadlines, more proactive communication" },
  ]} buildPrompt={(v) => `Write a performance review for ${v.name} rated "${v.rating}".\n\nStrengths: ${v.strengths}\nAreas for improvement: ${v.improvements}`} />;
}
