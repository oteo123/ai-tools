"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Instagram Caption Generator" description="Engaging captions that drive likes and comments." systemPrompt="You are a social media expert. Write engaging, authentic Instagram captions with relevant emojis and a call to action. Include 3-5 hashtag suggestions. Output ONLY the caption." fields={[
    { name: "topic", label: "What's the post about?", type: "text", placeholder: "e.g. Sunset photo from my vacation in Bali" },
    { name: "vibe", label: "Vibe", type: "select", placeholder: "Select vibe", options: ["Inspirational", "Funny", "Aesthetic", "Informative", "Personal", "Promotional"] },
    { name: "details", label: "Extra context", type: "textarea", placeholder: "e.g. Travel blog, 10K followers, fitness niche" },
  ]} buildPrompt={(v) => `Write a ${v.vibe?.toLowerCase()} Instagram caption for: ${v.topic}\n\nContext: ${v.details}`} />;
}
