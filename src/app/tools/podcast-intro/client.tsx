"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Podcast Intro Script Generator" description="Write a compelling podcast intro that hooks listeners instantly." systemPrompt="You are a podcast producer who writes punchy, engaging intro scripts. Create intros that hook listeners in the first 10 seconds, introduce the episode topic, and build anticipation. Include host cues and natural speaking rhythm. Output ONLY the intro script." fields={[
    { name: "podcast", label: "Podcast name", type: "text", placeholder: "e.g. The Growth Mindset Show" },
    { name: "episode", label: "Episode topic", type: "text", placeholder: "e.g. How to negotiate your salary" },
    { name: "style", label: "Intro style", type: "select", placeholder: "Select style", options: ["High Energy & Exciting", "Conversational & Warm", "Professional & Polished", "Mysterious & Intriguing"] },
    { name: "guest", label: "Guest name & credentials (optional)", type: "text", placeholder: "e.g. Sarah Chen, CEO of TechStart and Forbes 30 Under 30" },
  ]} buildPrompt={(v) => `Write a ${v.style?.toLowerCase()} podcast intro script for "${v.podcast}" about: ${v.episode}${v.guest ? `\n\nGuest: ${v.guest}` : ""}`} />;
}
