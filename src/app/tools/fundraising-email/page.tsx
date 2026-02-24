"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Fundraising Email Generator" description="Write fundraising emails that inspire donors to give." systemPrompt="You are a nonprofit fundraising copywriter. Write emotionally compelling fundraising emails with a strong hook, impactful story, clear ask, and urgent call to action. Make donors feel their contribution matters. Output ONLY the email." fields={[
    { name: "cause", label: "Cause / organization", type: "text", placeholder: "e.g. Local animal shelter, children's hospital" },
    { name: "goal", label: "Fundraising goal", type: "text", placeholder: "e.g. $10,000 for new equipment" },
    { name: "tone", label: "Tone", type: "select", placeholder: "Select tone", options: ["Urgent & Compelling", "Warm & Personal", "Hopeful & Inspiring", "Professional & Direct"] },
    { name: "details", label: "Key details or story", type: "textarea", placeholder: "e.g. A specific success story, upcoming deadline, matching donation opportunity" },
  ]} buildPrompt={(v) => `Write a ${v.tone?.toLowerCase()} fundraising email for ${v.cause} with a goal of ${v.goal}.\n\nDetails: ${v.details}`} />;
}
