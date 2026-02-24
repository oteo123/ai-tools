"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Cover Letter Generator" description="Personalized cover letters in seconds." systemPrompt="You are an expert career coach. Write compelling, personalized cover letters that highlight relevant experience and enthusiasm. Keep it under 400 words. Output ONLY the letter." fields={[
    { name: "role", label: "Job title & company", type: "text", placeholder: "e.g. Marketing Manager at Nike" },
    { name: "experience", label: "Your relevant experience", type: "textarea", placeholder: "e.g. 4 years in digital marketing, managed $500K ad budgets" },
    { name: "why", label: "Why this role?", type: "textarea", placeholder: "e.g. Passionate about sportswear, love the brand mission" },
  ]} buildPrompt={(v) => `Write a cover letter for: ${v.role}\n\nExperience: ${v.experience}\n\nWhy this role: ${v.why}`} />;
}
