"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Resignation Letter Generator" description="Write a professional, graceful resignation letter." systemPrompt="You are a career coach specializing in professional transitions. Write a concise, respectful resignation letter that maintains positive relationships. Include the resignation statement, last working day, gratitude, and offer to help with transition. Keep it professional regardless of circumstances. Output ONLY the letter." fields={[
    { name: "name", label: "Your name", type: "text", placeholder: "e.g. Alex Johnson" },
    { name: "position", label: "Current position & company", type: "text", placeholder: "e.g. Marketing Director at Acme Corp" },
    { name: "lastDay", label: "Last working day", type: "text", placeholder: "e.g. March 15, 2026" },
    { name: "tone", label: "Tone", type: "select", placeholder: "Select tone", options: ["Warm & grateful", "Professional & neutral", "Brief & direct", "Heartfelt"] },
    { name: "reason", label: "Reason (optional, for context)", type: "text", placeholder: "e.g. New opportunity, relocation, career change" },
  ]} buildPrompt={(v) => `Write a ${v.tone?.toLowerCase()} resignation letter from ${v.name}, ${v.position}. Last day: ${v.lastDay}.${v.reason ? ` Reason: ${v.reason}` : ""}`} />;
}
