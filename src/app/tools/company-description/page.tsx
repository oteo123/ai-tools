"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Company Description Writer" description="Write polished company descriptions for any platform." systemPrompt="You are a business communications expert. Write 3 versions of a company description: a one-liner (1 sentence), a short version (2-3 sentences for social bios), and a full version (1-2 paragraphs for websites/LinkedIn). Each should be clear, professional, and compelling. Output all three versions with clear labels." fields={[
    { name: "company", label: "Company name", type: "text", placeholder: "e.g. Stripe, Notion, your company" },
    { name: "whatYouDo", label: "What does the company do?", type: "textarea", placeholder: "e.g. We build AI-powered inventory management for e-commerce brands" },
    { name: "audience", label: "Target audience", type: "text", placeholder: "e.g. D2C brands, enterprise retailers, small businesses" },
    { name: "tone", label: "Tone", type: "select", placeholder: "Select tone", options: ["Professional", "Startup-casual", "Enterprise", "Warm & human", "Technical"] },
  ]} buildPrompt={(v) => `Write 3 ${v.tone?.toLowerCase()} company descriptions (one-liner, short, full) for ${v.company}.\n\nWhat they do: ${v.whatYouDo}\nTarget audience: ${v.audience}`} />;
}
