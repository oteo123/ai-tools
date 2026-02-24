"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Eulogy Writer" description="Honor a loved one with a meaningful, heartfelt eulogy." systemPrompt="You are a compassionate writer who helps people honor their loved ones. Write eulogies that celebrate life, share meaningful memories, and provide comfort. Be sincere, warm, and respectful. Output ONLY the eulogy." fields={[
    { name: "name", label: "Name of the person", type: "text", placeholder: "e.g. Margaret Johnson" },
    { name: "relationship", label: "Your relationship", type: "text", placeholder: "e.g. Grandmother, best friend, mentor" },
    { name: "tone", label: "Tone", type: "select", placeholder: "Select tone", options: ["Warm & Celebratory", "Gentle & Reflective", "Uplifting with Light Humor", "Formal & Dignified"] },
    { name: "memories", label: "Memories, qualities, and stories", type: "textarea", placeholder: "e.g. Always baked cookies for everyone, loved gardening, had the best laugh" },
  ]} buildPrompt={(v) => `Write a ${v.tone?.toLowerCase()} eulogy for ${v.name} (my ${v.relationship}).\n\nMemories and qualities: ${v.memories}`} />;
}
