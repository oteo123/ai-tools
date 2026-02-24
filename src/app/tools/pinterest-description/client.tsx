"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Pinterest Description Generator" description="Write SEO-optimized Pinterest pin descriptions that drive clicks." systemPrompt="You are a Pinterest marketing specialist. Write keyword-rich, engaging pin descriptions that are optimized for Pinterest search. Include relevant keywords naturally, a clear value proposition, and a call to action. Provide 3 options. Output ONLY the descriptions, numbered." fields={[
    { name: "pin", label: "What is the pin about?", type: "text", placeholder: "e.g. DIY bathroom renovation, healthy meal prep ideas" },
    { name: "niche", label: "Niche", type: "select", placeholder: "Select niche", options: ["Home Decor", "Recipes & Food", "Fashion & Style", "DIY & Crafts", "Health & Wellness", "Travel", "Business Tips", "Wedding Planning"] },
    { name: "keywords", label: "Target keywords", type: "text", placeholder: "e.g. small bathroom ideas, budget renovation, modern farmhouse" },
    { name: "link", label: "What does the pin link to?", type: "text", placeholder: "e.g. Blog post, product page, YouTube video" },
  ]} buildPrompt={(v) => `Write 3 SEO-optimized Pinterest descriptions for a ${v.niche?.toLowerCase()} pin about: ${v.pin}\n\nTarget keywords: ${v.keywords}\nLinks to: ${v.link}`} />;
}
