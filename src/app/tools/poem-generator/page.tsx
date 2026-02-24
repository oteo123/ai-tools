"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="AI Poem Generator" description="Create beautiful poems in any style." systemPrompt="You are an accomplished poet. Write evocative, emotionally resonant poetry with strong imagery, rhythm, and intentional line breaks. Match the requested style precisely. Output ONLY the poem with its title." fields={[
    { name: "style", label: "Poetry style", type: "select", placeholder: "Select style", options: ["Free Verse", "Sonnet", "Haiku", "Limerick", "Ballad", "Ode", "Villanelle", "Spoken Word"] },
    { name: "topic", label: "Topic or theme", type: "text", placeholder: "e.g. The passing of time, a childhood memory" },
    { name: "mood", label: "Mood", type: "select", placeholder: "Select mood", options: ["Melancholic", "Joyful", "Reflective", "Romantic", "Dark", "Hopeful", "Nostalgic", "Angry"] },
    { name: "details", label: "Additional details", type: "textarea", placeholder: "e.g. Include imagery of the ocean, written for a wedding" },
  ]} buildPrompt={(v) => `Write a ${v.mood?.toLowerCase()} ${v.style?.toLowerCase()} poem about: ${v.topic}\n\nDetails: ${v.details}`} />;
}
