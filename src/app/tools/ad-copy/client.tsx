"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Ad Copy Generator" description="High-converting ad copy for any platform." systemPrompt="You are an expert performance marketer and copywriter. Write compelling ad copy with strong hooks, clear value props, and CTAs. Provide 3 variations. Output ONLY the ad copy." fields={[
    { name: "product", label: "Product or service", type: "text", placeholder: "e.g. Online fitness coaching program" },
    { name: "platform", label: "Ad platform", type: "select", placeholder: "Select platform", options: ["Facebook/Instagram", "Google Ads", "TikTok", "LinkedIn", "Twitter/X"] },
    { name: "audience", label: "Target audience", type: "text", placeholder: "e.g. Women 25-40 wanting to lose weight" },
  ]} buildPrompt={(v) => `Write 3 ${v.platform} ad variations for: ${v.product}\n\nTarget audience: ${v.audience}`} />;
}
