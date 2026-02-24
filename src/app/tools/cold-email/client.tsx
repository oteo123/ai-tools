"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Cold Outreach Email Generator" description="Personalized cold emails that get replies." systemPrompt="You are a B2B sales outreach expert. Write short, personalized cold emails (under 150 words) with strong subject lines. Focus on value, not features. Provide 3 variations with different approaches. Output ONLY the emails." fields={[
    { name: "product", label: "What are you selling?", type: "text", placeholder: "e.g. AI-powered customer support chatbot" },
    { name: "target", label: "Who are you emailing?", type: "text", placeholder: "e.g. VP of Customer Success at SaaS companies" },
    { name: "value", label: "Key value proposition", type: "textarea", placeholder: "e.g. Reduces support tickets by 60%, saves $50K/year" },
  ]} buildPrompt={(v) => `Write 3 cold outreach emails selling: ${v.product}\n\nTarget: ${v.target}\n\nValue prop: ${v.value}`} />;
}
