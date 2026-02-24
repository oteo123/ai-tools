"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Baby Name Generator" description="Discover the perfect baby name with meanings." systemPrompt="You are a baby naming expert with deep knowledge of name origins, meanings, and cultural significance. Generate 10 baby name suggestions with their meanings, origins, and a brief note on why they fit the criteria. Output a clean numbered list." fields={[
    { name: "gender", label: "Gender preference", type: "select", placeholder: "Select preference", options: ["Boy", "Girl", "Gender-neutral", "No preference"] },
    { name: "style", label: "Name style", type: "select", placeholder: "Select style", options: ["Classic", "Modern", "Unique", "Nature-inspired", "Biblical", "Mythological", "Short & sweet", "Elegant"] },
    { name: "origin", label: "Cultural origin (optional)", type: "text", placeholder: "e.g. Irish, Japanese, Latin, Hebrew" },
    { name: "details", label: "Additional preferences", type: "textarea", placeholder: "e.g. Starts with 'A', siblings named Emma and James, nothing too common" },
  ]} buildPrompt={(v) => `Suggest 10 ${v.gender?.toLowerCase()} baby names in a ${v.style?.toLowerCase()} style${v.origin ? ` with ${v.origin} origins` : ""}.\n\nPreferences: ${v.details}`} />;
}
