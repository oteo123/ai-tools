"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Landing Page Copy Generator" description="Write high-converting landing page copy." systemPrompt="You are a conversion copywriting expert. Write compelling landing page copy with: a powerful headline, subheadline, hero section copy, 3 benefit-driven feature sections, social proof section placeholder, and a strong CTA section. Use persuasive language, address pain points, and focus on benefits over features. Format with clear section labels. Output ONLY the copy." fields={[
    { name: "product", label: "Product or service", type: "text", placeholder: "e.g. CloudSync — team file sharing app" },
    { name: "audience", label: "Target audience", type: "text", placeholder: "e.g. Remote teams, small business owners, freelancers" },
    { name: "painPoint", label: "Main pain point you solve", type: "textarea", placeholder: "e.g. Teams waste hours searching for the right files across Slack, email, and Drive" },
    { name: "tone", label: "Tone", type: "select", placeholder: "Select tone", options: ["Bold & confident", "Friendly & approachable", "Professional", "Playful", "Minimalist"] },
  ]} buildPrompt={(v) => `Write ${v.tone?.toLowerCase()} landing page copy for: ${v.product}\n\nTarget audience: ${v.audience}\nPain point: ${v.painPoint}`} />;
}
