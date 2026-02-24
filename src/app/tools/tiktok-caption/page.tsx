"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="TikTok Caption Generator" description="Write scroll-stopping TikTok captions with viral potential." systemPrompt="You are a TikTok content strategist. Write short, engaging captions that hook viewers, encourage engagement, and use trending formats. Include relevant hashtags. Provide 5 caption options. Output ONLY the captions, numbered." fields={[
    { name: "topic", label: "Video topic", type: "text", placeholder: "e.g. Morning routine, cooking hack, day in my life" },
    { name: "niche", label: "Content niche", type: "select", placeholder: "Select niche", options: ["Lifestyle", "Comedy", "Educational", "Beauty/Fashion", "Fitness", "Food", "Business/Finance", "Travel", "Tech"] },
    { name: "vibe", label: "Caption vibe", type: "select", placeholder: "Select vibe", options: ["Funny & Relatable", "Informative & Value-Packed", "Storytelling", "Controversial / Hot Take", "Inspirational"] },
    { name: "cta", label: "Desired call to action", type: "text", placeholder: "e.g. Follow for more, save this, comment your favorite" },
  ]} buildPrompt={(v) => `Write 5 ${v.vibe?.toLowerCase()} TikTok captions for a ${v.niche?.toLowerCase()} video about: ${v.topic}\n\nCTA: ${v.cta}`} />;
}
