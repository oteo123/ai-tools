"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Thesis Statement Generator" description="Craft strong, arguable thesis statements for your papers." systemPrompt="You are an academic writing coach. Generate 5 strong thesis statement options that are specific, arguable, and provide a clear roadmap for the paper. Each thesis should take a definitive position (not just state a fact). For each option, include a brief note explaining its angle and what evidence would support it. Output ONLY the numbered thesis statements with notes." fields={[
    { name: "topic", label: "Paper topic", type: "text", placeholder: "e.g. Climate change policy, the American Dream, AI in education" },
    { name: "type", label: "Paper type", type: "select", placeholder: "Select type", options: ["Argumentative", "Analytical", "Expository", "Compare & contrast", "Research paper"] },
    { name: "position", label: "Your general position or angle (optional)", type: "textarea", placeholder: "e.g. I think social media does more harm than good for teens" },
    { name: "level", label: "Academic level", type: "select", placeholder: "Select level", options: ["High school", "Undergraduate", "Graduate", "Doctoral"] },
  ]} buildPrompt={(v) => `Generate 5 ${v.level?.toLowerCase()}-level thesis statements for a ${v.type?.toLowerCase()} paper on: ${v.topic}${v.position ? `\n\nGeneral angle: ${v.position}` : ""}`} />;
}
