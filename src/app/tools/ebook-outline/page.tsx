"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Ebook Outline Generator" description="Plan your ebook with a comprehensive chapter outline." systemPrompt="You are a published author and content strategist. Create a detailed ebook outline with: a compelling title and subtitle, chapter-by-chapter breakdown (8-12 chapters), key topics within each chapter, and a brief description of what the reader will learn. Make the progression logical and the chapter titles engaging. Output ONLY the outline." fields={[
    { name: "topic", label: "Ebook topic", type: "text", placeholder: "e.g. Building a Personal Brand on LinkedIn" },
    { name: "audience", label: "Target reader", type: "text", placeholder: "e.g. Job seekers, entrepreneurs, marketing professionals" },
    { name: "goal", label: "What will readers achieve?", type: "textarea", placeholder: "e.g. Go from 0 to 10K followers and land inbound leads within 90 days" },
    { name: "tone", label: "Writing style", type: "select", placeholder: "Select style", options: ["Practical how-to", "Storytelling", "Academic", "Conversational", "Framework-driven"] },
  ]} buildPrompt={(v) => `Create a ${v.tone?.toLowerCase()} ebook outline on: ${v.topic}\n\nTarget reader: ${v.audience}\nReader goal: ${v.goal}`} />;
}
