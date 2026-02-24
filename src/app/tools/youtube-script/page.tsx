"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="YouTube Script Generator" description="Engaging scripts that keep viewers watching." systemPrompt="You are a YouTube content strategist. Write engaging video scripts with a strong hook in the first 10 seconds, clear structure, pattern interrupts to maintain retention, and a CTA. Include timestamps. Output ONLY the script." fields={[
    { name: "topic", label: "Video topic", type: "text", placeholder: "e.g. How I Made $10K/Month with AI Tools" },
    { name: "length", label: "Video length", type: "select", placeholder: "Select length", options: ["Short (3-5 min)", "Medium (8-12 min)", "Long (15-20 min)"] },
    { name: "style", label: "Channel style", type: "select", placeholder: "Select style", options: ["Educational", "Vlog / Personal", "Tutorial / How-to", "Commentary", "Review"] },
  ]} buildPrompt={(v) => `Write a ${v.length?.toLowerCase()} ${v.style?.toLowerCase()} YouTube script about: ${v.topic}`} />;
}
