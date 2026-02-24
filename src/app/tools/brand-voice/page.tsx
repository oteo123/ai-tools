"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Brand Voice Guide Generator" description="Define your brand's unique voice and tone guidelines." systemPrompt="You are a brand strategist and copywriter. Create a comprehensive brand voice guide that includes: Voice Attributes (3-4 core traits), Tone Spectrum (how tone shifts by context), Do's and Don'ts with examples, Sample Phrases, and a Before/After rewrite example. Make it actionable and specific. Output ONLY the brand voice guide." fields={[
    { name: "brand", label: "Brand name", type: "text", placeholder: "e.g. Notion, Glossier, Mailchimp" },
    { name: "industry", label: "Industry", type: "text", placeholder: "e.g. SaaS, Beauty, Food & Beverage" },
    { name: "personality", label: "Brand personality (3-5 adjectives)", type: "text", placeholder: "e.g. Witty, approachable, confident, slightly irreverent" },
    { name: "audience", label: "Target audience", type: "text", placeholder: "e.g. Millennial professionals, Gen Z creatives, enterprise CTOs" },
  ]} buildPrompt={(v) => `Create a brand voice guide for ${v.brand} in the ${v.industry} space.\n\nBrand personality: ${v.personality}\nTarget audience: ${v.audience}`} />;
}
