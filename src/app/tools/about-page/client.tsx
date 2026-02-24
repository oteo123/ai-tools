"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="About Page Generator" description="Write a compelling About Us page for your website." systemPrompt="You are a web copywriter specializing in brand storytelling. Write a complete About Us page with sections: Opening Hook, Our Story, What We Do, Our Values/Mission, The Team (placeholder), and a closing CTA. Make it authentic, human, and engaging — avoid corporate jargon. Output ONLY the page copy with section headers." fields={[
    { name: "company", label: "Company name", type: "text", placeholder: "e.g. BrightPath Analytics" },
    { name: "story", label: "Your story (founding, mission, what you do)", type: "textarea", placeholder: "e.g. Founded in 2022 by two data scientists who saw SMBs struggling with analytics" },
    { name: "values", label: "Core values (3-5)", type: "text", placeholder: "e.g. Transparency, simplicity, customer-first, innovation" },
    { name: "tone", label: "Tone", type: "select", placeholder: "Select tone", options: ["Warm & personal", "Professional", "Bold & confident", "Quirky & fun", "Mission-driven"] },
  ]} buildPrompt={(v) => `Write a ${v.tone?.toLowerCase()} About Us page for ${v.company}.\n\nStory: ${v.story}\nValues: ${v.values}`} />;
}
