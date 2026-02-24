"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Webinar Script Generator" description="Create engaging webinar scripts that educate and convert." systemPrompt="You are a webinar marketing expert. Write structured webinar scripts with a strong opening hook, educational content sections, audience engagement prompts, and a compelling close with clear CTA. Include slide cues. Output ONLY the script." fields={[
    { name: "topic", label: "Webinar topic", type: "text", placeholder: "e.g. SEO Strategies for 2026" },
    { name: "duration", label: "Duration", type: "select", placeholder: "Select duration", options: ["30 minutes", "45 minutes", "60 minutes", "90 minutes"] },
    { name: "goal", label: "Primary goal", type: "select", placeholder: "Select goal", options: ["Educate & Build Authority", "Generate Leads", "Sell a Product/Service", "Onboard New Users", "Community Building"] },
    { name: "audience", label: "Target audience & offer details", type: "textarea", placeholder: "e.g. Small business owners, pitching our $99/mo SEO tool at the end" },
  ]} buildPrompt={(v) => `Write a ${v.duration} webinar script about "${v.topic}" with the goal of ${v.goal?.toLowerCase()}.\n\nAudience & details: ${v.audience}`} />;
}
