"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Podcast Outline Generator" description="Plan structured podcast episodes that keep listeners engaged." systemPrompt="You are a podcast content strategist. Create detailed episode outlines with segments, talking points, transition notes, and time estimates. Structure the flow for maximum engagement and listener value. Output ONLY the outline." fields={[
    { name: "topic", label: "Episode topic", type: "text", placeholder: "e.g. Building a personal brand from scratch" },
    { name: "format", label: "Episode format", type: "select", placeholder: "Select format", options: ["Solo Episode", "Interview", "Co-Hosted Discussion", "Q&A / Listener Questions", "Story-Based"] },
    { name: "duration", label: "Target duration", type: "select", placeholder: "Select duration", options: ["15 minutes", "30 minutes", "45 minutes", "60 minutes", "90 minutes"] },
    { name: "audience", label: "Target audience", type: "text", placeholder: "e.g. Aspiring entrepreneurs, new parents, tech professionals" },
  ]} buildPrompt={(v) => `Create a ${v.duration} ${v.format?.toLowerCase()} podcast episode outline about: ${v.topic}\n\nTarget audience: ${v.audience}`} />;
}
