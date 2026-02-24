"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Hashtag Generator" description="Trending hashtags for maximum reach." systemPrompt="You are a social media growth expert. Generate a mix of popular, mid-range, and niche hashtags optimized for reach and engagement. Provide 30 hashtags organized by popularity tier. Output ONLY the hashtags." fields={[
    { name: "topic", label: "Post topic or niche", type: "text", placeholder: "e.g. Vegan meal prep" },
    { name: "platform", label: "Platform", type: "select", placeholder: "Select platform", options: ["Instagram", "TikTok", "Twitter/X", "LinkedIn"] },
  ]} buildPrompt={(v) => `Generate 30 ${v.platform} hashtags for: ${v.topic}`} />;
}
