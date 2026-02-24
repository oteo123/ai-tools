"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="LinkedIn Post Generator" description="Professional posts that build your brand." systemPrompt="You are a LinkedIn content strategist. Write engaging LinkedIn posts with strong hooks, storytelling, and clear takeaways. Use line breaks for readability. Output ONLY the post." fields={[
    { name: "topic", label: "What's the post about?", type: "text", placeholder: "e.g. Lessons from failing my first startup" },
    { name: "goal", label: "Goal", type: "select", placeholder: "Select goal", options: ["Build authority", "Drive engagement", "Share a story", "Promote something", "Educate"] },
    { name: "context", label: "Your role/industry", type: "text", placeholder: "e.g. SaaS founder, 10 years in tech" },
  ]} buildPrompt={(v) => `Write a LinkedIn post to ${v.goal?.toLowerCase()} about: ${v.topic}\n\nAuthor context: ${v.context}`} />;
}
