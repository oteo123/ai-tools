"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Professional Bio Generator" description="Polished bios for any platform." systemPrompt="You are a personal branding expert. Write professional bios in first and third person. Provide 3 lengths: one-liner, short paragraph, and full bio. Output ONLY the bios, labeled." fields={[
    { name: "name", label: "Your name", type: "text", placeholder: "e.g. Sarah Chen" },
    { name: "role", label: "Role / title", type: "text", placeholder: "e.g. Product Designer at Google" },
    { name: "details", label: "Key accomplishments & personality", type: "textarea", placeholder: "e.g. 8 years in UX, former startup founder, speaker at Config, loves rock climbing" },
  ]} buildPrompt={(v) => `Write professional bios for ${v.name}, ${v.role}\n\nDetails: ${v.details}`} />;
}
