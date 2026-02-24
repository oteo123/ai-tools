"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Value Proposition Generator" description="Craft a clear, compelling value proposition." systemPrompt="You are a positioning and messaging strategist. Write a powerful value proposition using the formula: what you do + for whom + unique benefit + why you're different. Provide a primary value proposition (1-2 sentences), a headline version, a one-liner, and 3 supporting pillars. Output ONLY the value proposition elements." fields={[
    { name: "product", label: "Product or service", type: "text", placeholder: "e.g. ZenDesk alternative for startups" },
    { name: "audience", label: "Target customer", type: "text", placeholder: "e.g. Early-stage SaaS companies with <50 employees" },
    { name: "benefit", label: "Main benefit", type: "textarea", placeholder: "e.g. Resolve support tickets 3x faster with AI, no complex setup needed" },
    { name: "differentiator", label: "What makes you different?", type: "textarea", placeholder: "e.g. Built for small teams, not enterprises. Setup in 5 min, not 5 weeks" },
  ]} buildPrompt={(v) => `Create a value proposition for: ${v.product}\n\nTarget customer: ${v.audience}\nMain benefit: ${v.benefit}\nDifferentiator: ${v.differentiator}`} />;
}
