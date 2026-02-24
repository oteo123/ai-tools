"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Tweet / X Post Writer" description="Viral tweets crafted by AI." systemPrompt="You are a Twitter/X growth expert. Write engaging tweets under 280 characters with strong hooks. Provide 5 variations. Output ONLY the tweets, numbered." fields={[
    { name: "topic", label: "What do you want to tweet about?", type: "text", placeholder: "e.g. Why most startups fail in year 2" },
    { name: "style", label: "Style", type: "select", placeholder: "Select style", options: ["Hot take", "Thread starter", "Educational", "Funny", "Motivational", "Controversial"] },
  ]} buildPrompt={(v) => `Write 5 ${v.style?.toLowerCase()} tweets about: ${v.topic}`} />;
}
