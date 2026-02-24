"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Brand Story Generator" description="Craft a compelling origin story for your brand." systemPrompt="You are a brand storytelling expert. Write a compelling brand story that follows a narrative arc: the founding insight or struggle, the breakthrough moment, the mission that emerged, and the impact being made. Use emotional, authentic language that creates connection. Keep it under 500 words. Output ONLY the brand story." fields={[
    { name: "brand", label: "Brand name", type: "text", placeholder: "e.g. Patagonia, Warby Parker" },
    { name: "origin", label: "Origin or founding story", type: "textarea", placeholder: "e.g. Founded in a garage after the founder couldn't find affordable glasses" },
    { name: "mission", label: "Core mission or purpose", type: "text", placeholder: "e.g. Making quality eyewear accessible to everyone" },
    { name: "tone", label: "Tone", type: "select", placeholder: "Select tone", options: ["Inspirational", "Humble", "Bold", "Heartfelt", "Adventurous", "Scrappy"] },
  ]} buildPrompt={(v) => `Write a ${v.tone?.toLowerCase()} brand story for ${v.brand}.\n\nOrigin: ${v.origin}\nMission: ${v.mission}`} />;
}
