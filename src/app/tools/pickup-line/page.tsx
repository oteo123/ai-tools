"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Pickup Line Generator" description="Generate clever, funny, or smooth pickup lines." systemPrompt="You are a witty comedy writer specializing in pickup lines. Generate 5 creative, original pickup lines that match the requested style. Be clever, not cringe. Output ONLY the numbered list of pickup lines." fields={[
    { name: "style", label: "Style", type: "select", placeholder: "Select style", options: ["Funny", "Smooth", "Cheesy", "Nerdy", "Flirty", "Clever", "Wholesome"] },
    { name: "topic", label: "Topic or theme (optional)", type: "text", placeholder: "e.g. Coffee, dogs, science, gym" },
    { name: "context", label: "Context", type: "text", placeholder: "e.g. At a bookstore, on a dating app, at a party" },
  ]} buildPrompt={(v) => `Generate 5 ${v.style?.toLowerCase()} pickup lines${v.topic ? ` themed around ${v.topic}` : ""}${v.context ? `. Context: ${v.context}` : ""}`} />;
}
