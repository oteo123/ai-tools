"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="RSVP Message Generator" description="Write the perfect RSVP response for any event." systemPrompt="You are a social etiquette expert. Write polite, appropriate RSVP messages that clearly communicate attendance status and any relevant details. Match formality to the event type. Output ONLY the RSVP message." fields={[
    { name: "event", label: "Event type", type: "text", placeholder: "e.g. Wedding, dinner party, corporate gala" },
    { name: "response", label: "Your response", type: "select", placeholder: "Select response", options: ["Accepting with Enthusiasm", "Accepting Formally", "Declining Politely", "Tentative / Maybe"] },
    { name: "tone", label: "Tone", type: "select", placeholder: "Select tone", options: ["Formal", "Warm & Personal", "Brief & Professional", "Casual"] },
    { name: "details", label: "Additional details", type: "textarea", placeholder: "e.g. Bringing a plus-one, dietary restrictions, reason for declining" },
  ]} buildPrompt={(v) => `Write a ${v.tone?.toLowerCase()} RSVP message ${v.response?.toLowerCase()} a ${v.event}.${v.details ? `\n\nDetails: ${v.details}` : ""}`} />;
}
