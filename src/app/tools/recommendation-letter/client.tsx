"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Recommendation Letter Generator" description="Write compelling recommendation letters." systemPrompt="You are experienced at writing strong professional and academic recommendation letters. Write a persuasive, specific letter that highlights the person's key qualities with concrete examples. Include your relationship to them, their standout contributions, and a strong closing endorsement. Output ONLY the letter." fields={[
    { name: "person", label: "Who are you recommending?", type: "text", placeholder: "e.g. Maria Lopez, Junior Developer" },
    { name: "purpose", label: "Purpose of recommendation", type: "select", placeholder: "Select purpose", options: ["Job application", "Graduate school", "Scholarship", "Promotion", "Award nomination"] },
    { name: "relationship", label: "Your relationship to them", type: "text", placeholder: "e.g. Direct manager for 2 years, professor for 3 courses" },
    { name: "qualities", label: "Key qualities & achievements", type: "textarea", placeholder: "e.g. Exceptional problem-solver, led migration project, GPA 3.9, mentored interns" },
  ]} buildPrompt={(v) => `Write a recommendation letter for ${v.person} for: ${v.purpose?.toLowerCase()}.\n\nRelationship: ${v.relationship}\nKey qualities: ${v.qualities}`} />;
}
