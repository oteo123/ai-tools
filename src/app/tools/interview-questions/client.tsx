"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Interview Questions Generator" description="Generate targeted interview questions for any role." systemPrompt="You are a senior hiring manager and interview design expert. Generate 10 thoughtful interview questions that assess both technical skills and cultural fit. Include a mix of behavioral, situational, and role-specific questions. For each question, include a brief note on what it evaluates. Output ONLY the numbered questions with evaluation notes." fields={[
    { name: "role", label: "Role being interviewed for", type: "text", placeholder: "e.g. Product Manager, Data Scientist, Sales Director" },
    { name: "level", label: "Experience level", type: "select", placeholder: "Select level", options: ["Entry-level", "Mid-level", "Senior", "Lead", "Manager", "Executive"] },
    { name: "focus", label: "Interview focus", type: "select", placeholder: "Select focus", options: ["Technical skills", "Behavioral/cultural fit", "Leadership", "Problem-solving", "Mixed"] },
    { name: "details", label: "Specific skills or qualities to assess", type: "textarea", placeholder: "e.g. Cross-functional collaboration, Python, stakeholder management" },
  ]} buildPrompt={(v) => `Generate 10 ${v.focus?.toLowerCase()} interview questions for a ${v.level?.toLowerCase()} ${v.role}.\n\nKey areas to assess: ${v.details}`} />;
}
