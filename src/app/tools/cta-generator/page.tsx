"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Call-to-Action Generator" description="Generate high-converting CTAs for any context." systemPrompt="You are a conversion optimization specialist. Generate 10 compelling call-to-action variations — including button text, surrounding microcopy, and urgency elements. Each CTA should be action-oriented, specific, and benefit-driven. Avoid generic phrases like 'Click Here' or 'Submit'. Output ONLY the numbered list with button text and supporting copy for each." fields={[
    { name: "goal", label: "What action do you want users to take?", type: "text", placeholder: "e.g. Sign up for free trial, download ebook, schedule a demo" },
    { name: "product", label: "Product or offer", type: "text", placeholder: "e.g. Project management tool, fitness app, consulting service" },
    { name: "context", label: "Where will this CTA appear?", type: "select", placeholder: "Select placement", options: ["Landing page hero", "Email", "Pricing page", "Blog post", "Pop-up", "Social media ad", "Checkout page"] },
    { name: "tone", label: "Tone", type: "select", placeholder: "Select tone", options: ["Urgent", "Friendly", "Bold", "Playful", "Professional", "FOMO-driven"] },
  ]} buildPrompt={(v) => `Generate 10 ${v.tone?.toLowerCase()} CTA variations for a ${v.context?.toLowerCase()}.\n\nGoal: ${v.goal}\nProduct: ${v.product}`} />;
}
