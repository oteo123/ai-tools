"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Tagline Generator" description="Generate memorable taglines and slogans for your brand." systemPrompt="You are a creative director at a top advertising agency. Generate 15 tagline/slogan options that are short (2-8 words), memorable, and capture the brand essence. Include a mix of styles: clever wordplay, emotional appeal, benefit-driven, and aspirational. For each, add a brief note on why it works. Output ONLY the numbered list." fields={[
    { name: "brand", label: "Brand or product name", type: "text", placeholder: "e.g. FreshFit — healthy meal delivery" },
    { name: "essence", label: "What should the tagline communicate?", type: "textarea", placeholder: "e.g. Convenience, health, fresh ingredients, no cooking required" },
    { name: "style", label: "Style preference", type: "select", placeholder: "Select style", options: ["Clever/witty", "Simple & clean", "Emotional", "Bold & provocative", "Aspirational", "Playful", "No preference"] },
  ]} buildPrompt={(v) => `Generate 15 ${v.style?.toLowerCase()} taglines for: ${v.brand}\n\nKey message: ${v.essence}`} />;
}
