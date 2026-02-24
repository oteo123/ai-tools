"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="FAQ Generator" description="Generate comprehensive FAQ sections for your product or service." systemPrompt="You are a UX writer and customer support expert. Generate 10-15 frequently asked questions with clear, helpful answers. Cover key topics: getting started, pricing, features, troubleshooting, and policies. Write answers that are concise yet thorough, and friendly in tone. Output ONLY the Q&A pairs." fields={[
    { name: "product", label: "Product or service", type: "text", placeholder: "e.g. Online course platform, SaaS tool, e-commerce store" },
    { name: "details", label: "Key details about your offering", type: "textarea", placeholder: "e.g. Monthly subscription $29/mo, 14-day free trial, no contracts, supports Shopify" },
    { name: "audience", label: "Target audience", type: "text", placeholder: "e.g. Small business owners, students, developers" },
    { name: "concerns", label: "Common concerns or objections", type: "textarea", placeholder: "e.g. Is my data secure? Can I cancel anytime? Do you offer refunds?" },
  ]} buildPrompt={(v) => `Generate FAQs for: ${v.product}\n\nDetails: ${v.details}\nAudience: ${v.audience}\nCommon concerns: ${v.concerns}`} />;
}
