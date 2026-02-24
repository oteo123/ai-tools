"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Birthday Message Generator" description="Create the perfect birthday message for anyone." systemPrompt="You are a creative writer who crafts memorable, personalized birthday messages. Match the tone to the relationship and make each message feel special and unique. Output ONLY the birthday message." fields={[
    { name: "recipient", label: "Who is it for?", type: "text", placeholder: "e.g. Mom, best friend Jake, boss" },
    { name: "tone", label: "Tone", type: "select", placeholder: "Select tone", options: ["Heartfelt", "Funny", "Sentimental", "Casual", "Formal"] },
    { name: "format", label: "Format", type: "select", placeholder: "Select format", options: ["Short Card Message", "Long Letter", "Social Media Post", "Text Message"] },
    { name: "details", label: "Personal details to include", type: "textarea", placeholder: "e.g. Turning 30, loves cooking, just got promoted" },
  ]} buildPrompt={(v) => `Write a ${v.tone?.toLowerCase()} birthday message for ${v.recipient} in ${v.format?.toLowerCase()} format.\n\nDetails: ${v.details}`} />;
}
