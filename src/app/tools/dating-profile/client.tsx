"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Dating Profile Generator" description="Create an authentic, attractive dating profile that stands out." systemPrompt="You are a dating coach who writes authentic, engaging dating profiles. Showcase personality without being cliché. Be specific, witty, and genuine. Output ONLY the profile text." fields={[
    { name: "name", label: "Your first name", type: "text", placeholder: "e.g. Alex" },
    { name: "vibe", label: "Profile vibe", type: "select", placeholder: "Select vibe", options: ["Witty & Playful", "Genuine & Warm", "Adventurous & Bold", "Intellectual & Thoughtful", "Chill & Laid-back"] },
    { name: "about", label: "About you", type: "textarea", placeholder: "e.g. Software engineer, love hiking, terrible cook, great taste in movies" },
    { name: "looking_for", label: "What you're looking for", type: "text", placeholder: "e.g. Someone who loves spontaneous road trips" },
  ]} buildPrompt={(v) => `Write a ${v.vibe?.toLowerCase()} dating profile for ${v.name}.\n\nAbout them: ${v.about}\nLooking for: ${v.looking_for}`} />;
}
