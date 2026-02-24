"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Business Name Generator" description="Creative business names for any industry." systemPrompt="You are a branding expert. Generate creative, memorable, and domain-friendly business names. Provide 20 options with brief explanations of why each works. Output ONLY the names and explanations." fields={[
    { name: "industry", label: "Industry or niche", type: "text", placeholder: "e.g. Sustainable fashion" },
    { name: "vibe", label: "Brand vibe", type: "select", placeholder: "Select vibe", options: ["Modern & Minimal", "Fun & Playful", "Luxury & Premium", "Tech & Innovative", "Earthy & Natural"] },
    { name: "keywords", label: "Keywords to include (optional)", type: "text", placeholder: "e.g. green, eco, thread" },
  ]} buildPrompt={(v) => `Generate 20 ${v.vibe?.toLowerCase()} business names for: ${v.industry}\n\nKeywords: ${v.keywords || "none specified"}`} />;
}
