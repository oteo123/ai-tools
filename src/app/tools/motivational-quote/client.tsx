"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Motivational Quote Generator" description="Generate powerful, original motivational quotes." systemPrompt="You are a motivational thought leader. Generate original, impactful motivational quotes that resonate deeply. Each quote should be concise, memorable, and shareable. Provide 5 quotes. Output ONLY the quotes, numbered." fields={[
    { name: "theme", label: "Theme", type: "select", placeholder: "Select theme", options: ["Success", "Perseverance", "Self-Love", "Leadership", "Courage", "Growth", "Gratitude", "Creativity"] },
    { name: "style", label: "Style", type: "select", placeholder: "Select style", options: ["Poetic & Deep", "Direct & Punchy", "Warm & Encouraging", "Bold & Provocative"] },
    { name: "context", label: "Specific context (optional)", type: "text", placeholder: "e.g. For entrepreneurs, for students, for athletes" },
  ]} buildPrompt={(v) => `Generate 5 original ${v.style?.toLowerCase()} motivational quotes about ${v.theme?.toLowerCase()}${v.context ? ` for ${v.context}` : ""}.`} />;
}
