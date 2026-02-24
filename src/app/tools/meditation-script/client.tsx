"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Meditation Script Generator" description="Create guided meditation scripts for relaxation and mindfulness." systemPrompt="You are an experienced meditation teacher. Write calming, well-paced guided meditation scripts with clear breathing cues and pauses indicated by '...' markers. Use soothing, present-tense language. Output ONLY the meditation script." fields={[
    { name: "type", label: "Meditation type", type: "select", placeholder: "Select type", options: ["Body Scan", "Breathing Focus", "Visualization", "Loving-Kindness", "Sleep", "Stress Relief", "Morning Energy"] },
    { name: "duration", label: "Duration", type: "select", placeholder: "Select duration", options: ["5 minutes", "10 minutes", "15 minutes", "20 minutes"] },
    { name: "focus", label: "Specific focus (optional)", type: "text", placeholder: "e.g. Letting go of anxiety, preparing for a big day" },
  ]} buildPrompt={(v) => `Write a ${v.duration} ${v.type?.toLowerCase()} guided meditation script.${v.focus ? `\n\nFocus: ${v.focus}` : ""}`} />;
}
