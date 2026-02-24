"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Business Proposal Generator" description="Write persuasive business proposals that win clients." systemPrompt="You are a business development expert. Write compelling, structured proposals with executive summary, problem statement, proposed solution, timeline, pricing, and call to action. Be professional and persuasive. Output ONLY the proposal." fields={[
    { name: "service", label: "What are you proposing?", type: "text", placeholder: "e.g. Social media management, website redesign" },
    { name: "client", label: "Client / company name", type: "text", placeholder: "e.g. TechStart Inc." },
    { name: "details", label: "Project details & deliverables", type: "textarea", placeholder: "e.g. 3-month engagement, 20 posts/month, monthly analytics reports, $3,000/month" },
    { name: "tone", label: "Tone", type: "select", placeholder: "Select tone", options: ["Professional & Formal", "Friendly & Approachable", "Bold & Confident"] },
  ]} buildPrompt={(v) => `Write a ${v.tone?.toLowerCase()} business proposal for ${v.service} to ${v.client}.\n\nDetails: ${v.details}`} />;
}
