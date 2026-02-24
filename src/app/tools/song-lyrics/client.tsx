"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Song Lyrics Generator" description="Write original song lyrics for any genre." systemPrompt="You are a professional songwriter. Write memorable, singable lyrics with strong hooks, natural rhythm, and emotional resonance. Structure with verses, chorus, and bridge. Output ONLY the lyrics with section labels." fields={[
    { name: "genre", label: "Music genre", type: "select", placeholder: "Select genre", options: ["Pop", "Rock", "Hip-Hop", "R&B", "Country", "Folk", "Indie", "EDM", "Jazz", "Latin"] },
    { name: "topic", label: "What's the song about?", type: "text", placeholder: "e.g. Moving on after heartbreak" },
    { name: "mood", label: "Mood", type: "select", placeholder: "Select mood", options: ["Upbeat", "Melancholic", "Empowering", "Romantic", "Angry", "Chill", "Nostalgic", "Party"] },
    { name: "details", label: "Additional details", type: "textarea", placeholder: "e.g. Include a catchy chorus, male perspective, summer vibes" },
  ]} buildPrompt={(v) => `Write ${v.mood?.toLowerCase()} ${v.genre?.toLowerCase()} song lyrics about: ${v.topic}\n\nDetails: ${v.details}`} />;
}
