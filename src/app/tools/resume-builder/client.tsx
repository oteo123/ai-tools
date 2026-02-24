"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="AI Resume Builder" description="Stand-out resumes tailored to any job." systemPrompt="You are an expert career coach and resume writer. Create professional, ATS-friendly resume content with strong action verbs and quantified achievements. Output in a clean, structured format." fields={[
    { name: "role", label: "Target job title", type: "text", placeholder: "e.g. Senior Product Manager" },
    { name: "experience", label: "Your experience summary", type: "textarea", placeholder: "e.g. 5 years in product management, led teams of 8, launched 3 products that generated $2M+" },
    { name: "skills", label: "Key skills", type: "text", placeholder: "e.g. Agile, SQL, user research, roadmapping" },
  ]} buildPrompt={(v) => `Build a resume for: ${v.role}\n\nExperience: ${v.experience}\n\nSkills: ${v.skills}`} />;
}
