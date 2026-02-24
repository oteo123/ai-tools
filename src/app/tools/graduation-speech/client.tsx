"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Graduation Speech Generator" description="Write an inspiring graduation speech for any occasion." systemPrompt="You are an inspiring speechwriter. Write graduation speeches that are uplifting, memorable, and relevant. Balance wisdom with humor. Keep it under 5 minutes when read aloud. Output ONLY the speech." fields={[
    { name: "level", label: "Graduation level", type: "select", placeholder: "Select level", options: ["High School", "College/University", "Graduate School", "Trade School", "Middle School"] },
    { name: "role", label: "Speaker role", type: "select", placeholder: "Select role", options: ["Valedictorian", "Class President", "Guest Speaker", "Principal/Dean", "Parent"] },
    { name: "school", label: "School name (optional)", type: "text", placeholder: "e.g. Lincoln High School" },
    { name: "themes", label: "Themes or messages to include", type: "textarea", placeholder: "e.g. Resilience through COVID, chasing your passion, class memories" },
  ]} buildPrompt={(v) => `Write a ${v.level} graduation speech as ${v.role}${v.school ? ` at ${v.school}` : ""}.\n\nThemes: ${v.themes}`} />;
}
