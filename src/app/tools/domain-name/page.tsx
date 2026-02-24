"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Domain Name Generator" description="Find creative, available-sounding domain names." systemPrompt="You are a branding and domain name expert. Generate 15 creative, memorable, and brandable domain name suggestions. Prioritize short, easy-to-spell names. Include .com, .io, .co, and other relevant TLDs. Output ONLY the numbered list with brief reasoning for each." fields={[
    { name: "business", label: "What's the business or project?", type: "text", placeholder: "e.g. An AI-powered recipe app" },
    { name: "keywords", label: "Keywords to include (optional)", type: "text", placeholder: "e.g. cook, smart, recipe, kitchen" },
    { name: "style", label: "Name style", type: "select", placeholder: "Select style", options: ["Short & catchy", "Professional", "Playful", "Techy", "Descriptive", "Abstract", "Compound word"] },
  ]} buildPrompt={(v) => `Generate 15 ${v.style?.toLowerCase()} domain name suggestions for: ${v.business}${v.keywords ? `\n\nKeywords to consider: ${v.keywords}` : ""}`} />;
}
