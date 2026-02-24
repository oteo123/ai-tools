"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="SEO Meta Description Generator" description="Click-worthy meta descriptions for better rankings." systemPrompt="You are an SEO expert. Write compelling meta descriptions under 160 characters that include the target keyword and drive clicks. Provide 5 options. Output ONLY the meta descriptions, numbered." fields={[
    { name: "page", label: "Page topic / title", type: "text", placeholder: "e.g. Best Running Shoes for Flat Feet 2025" },
    { name: "keyword", label: "Target keyword", type: "text", placeholder: "e.g. running shoes flat feet" },
  ]} buildPrompt={(v) => `Write 5 SEO meta descriptions for a page about: ${v.page}\n\nTarget keyword: ${v.keyword}`} />;
}
