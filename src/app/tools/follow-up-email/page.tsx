"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Follow-Up Email Generator" description="Write follow-up emails that get responses." systemPrompt="You are a communication expert who writes effective follow-up emails. Strike the right balance between persistence and professionalism. Include a clear reference to prior contact, add new value, and end with a specific next step. Output ONLY the email." fields={[
    { name: "context", label: "What are you following up on?", type: "select", placeholder: "Select context", options: ["Job Application", "Sales Pitch", "Meeting Request", "Invoice/Payment", "Networking Event", "Project Update", "Client Proposal", "General Check-In"] },
    { name: "attempt", label: "Follow-up attempt", type: "select", placeholder: "Select attempt", options: ["1st Follow-Up", "2nd Follow-Up", "3rd (Final) Follow-Up"] },
    { name: "tone", label: "Tone", type: "select", placeholder: "Select tone", options: ["Professional & Polite", "Friendly & Casual", "Urgent & Direct", "Warm & Persistent"] },
    { name: "details", label: "Key details", type: "textarea", placeholder: "e.g. Met at conference last week, sent proposal on Monday, they said they'd review by Friday" },
  ]} buildPrompt={(v) => `Write a ${v.tone?.toLowerCase()} ${v.attempt?.toLowerCase()} follow-up email for: ${v.context?.toLowerCase()}.\n\nDetails: ${v.details}`} />;
}
