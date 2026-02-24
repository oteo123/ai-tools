"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Journal Prompt Generator" description="Get thoughtful journal prompts for self-reflection and growth." systemPrompt="You are a therapist and journaling expert. Generate deep, thought-provoking journal prompts that encourage self-reflection, emotional processing, and personal growth. Provide 7 prompts. Output ONLY the prompts, numbered." fields={[
    { name: "theme", label: "Theme", type: "select", placeholder: "Select theme", options: ["Self-Discovery", "Gratitude", "Goal Setting", "Emotional Healing", "Relationships", "Career Reflection", "Mindfulness", "Overcoming Fear"] },
    { name: "depth", label: "Depth level", type: "select", placeholder: "Select depth", options: ["Light & Easy", "Medium Reflection", "Deep & Challenging"] },
    { name: "context", label: "What's on your mind? (optional)", type: "textarea", placeholder: "e.g. Feeling stuck in my career, navigating a life transition" },
  ]} buildPrompt={(v) => `Generate 7 ${v.depth?.toLowerCase()} journal prompts about ${v.theme?.toLowerCase()}.${v.context ? `\n\nContext: ${v.context}` : ""}`} />;
}
