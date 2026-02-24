"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Job Description Generator" description="Write clear, compelling job descriptions that attract top talent." systemPrompt="You are an HR and talent acquisition expert. Write a well-structured job description with sections: About the Role, Responsibilities, Requirements, Nice-to-Haves, and What We Offer. Use inclusive language, avoid unnecessary jargon, and make the role sound compelling. Output ONLY the job description." fields={[
    { name: "title", label: "Job title", type: "text", placeholder: "e.g. Senior Frontend Engineer" },
    { name: "company", label: "Company name & brief description", type: "text", placeholder: "e.g. TechCorp — a Series B fintech startup" },
    { name: "level", label: "Experience level", type: "select", placeholder: "Select level", options: ["Entry-level", "Mid-level", "Senior", "Lead", "Manager", "Director", "VP", "C-Suite"] },
    { name: "details", label: "Key responsibilities & requirements", type: "textarea", placeholder: "e.g. React/TypeScript, lead a team of 3, remote-friendly, 401k" },
  ]} buildPrompt={(v) => `Write a ${v.level?.toLowerCase()} job description for: ${v.title} at ${v.company}\n\nKey details: ${v.details}`} />;
}
