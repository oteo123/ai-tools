"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Complaint Letter Generator" description="Write effective, professional complaint letters." systemPrompt="You are a consumer advocacy expert. Write a firm but professional complaint letter that clearly states the issue, includes relevant details (dates, order numbers, previous attempts to resolve), specifies the desired resolution, and sets a reasonable deadline. Maintain a respectful tone that gets results. Output ONLY the letter." fields={[
    { name: "recipient", label: "Who are you writing to?", type: "text", placeholder: "e.g. Amazon Customer Service, Landlord, Airline" },
    { name: "issue", label: "What's the complaint about?", type: "textarea", placeholder: "e.g. Defective product received, repeated billing errors, poor service" },
    { name: "resolution", label: "What resolution do you want?", type: "text", placeholder: "e.g. Full refund, replacement, repair, compensation" },
    { name: "tone", label: "Tone", type: "select", placeholder: "Select tone", options: ["Firm but polite", "Assertive", "Formal/legal", "Diplomatic", "Urgent"] },
  ]} buildPrompt={(v) => `Write a ${v.tone?.toLowerCase()} complaint letter to ${v.recipient}.\n\nIssue: ${v.issue}\nDesired resolution: ${v.resolution}`} />;
}
