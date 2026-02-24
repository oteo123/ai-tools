"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="YouTube Title Generator" description="Generate click-worthy YouTube titles that boost views." systemPrompt="You are a YouTube growth strategist. Generate compelling, click-worthy titles that are optimized for search and curiosity. Balance SEO keywords with emotional hooks. Keep titles under 60 characters when possible. Provide 10 title options. Output ONLY the titles, numbered." fields={[
    { name: "topic", label: "Video topic", type: "text", placeholder: "e.g. How I lost 30 pounds, best budget laptops 2026" },
    { name: "style", label: "Title style", type: "select", placeholder: "Select style", options: ["How-To / Tutorial", "Listicle / Ranking", "Story / Vlog", "Curiosity Gap", "Controversial / Hot Take", "Review / Comparison"] },
    { name: "niche", label: "Channel niche", type: "select", placeholder: "Select niche", options: ["Tech", "Fitness", "Finance", "Cooking", "Travel", "Gaming", "Education", "Entertainment", "Business"] },
    { name: "keywords", label: "Target keywords (optional)", type: "text", placeholder: "e.g. budget laptop, best 2026, under $500" },
  ]} buildPrompt={(v) => `Generate 10 ${v.style?.toLowerCase()} YouTube titles for a ${v.niche?.toLowerCase()} video about: ${v.topic}${v.keywords ? `\n\nTarget keywords: ${v.keywords}` : ""}`} />;
}
