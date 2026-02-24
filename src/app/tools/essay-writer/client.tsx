"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Essay Writer" description="Write well-structured essays on any topic." systemPrompt="You are an academic writing expert. Write a well-structured essay with a strong thesis statement, logical paragraph organization with topic sentences, supporting evidence and analysis, smooth transitions, and a compelling conclusion. Maintain academic tone while keeping the writing engaging. Output ONLY the essay." fields={[
    { name: "topic", label: "Essay topic or prompt", type: "textarea", placeholder: "e.g. Discuss the impact of social media on democratic discourse" },
    { name: "type", label: "Essay type", type: "select", placeholder: "Select type", options: ["Argumentative", "Expository", "Persuasive", "Analytical", "Compare & contrast", "Narrative", "Descriptive"] },
    { name: "length", label: "Length", type: "select", placeholder: "Select length", options: ["Short (300-500 words)", "Medium (500-800 words)", "Long (800-1200 words)", "Extended (1200-2000 words)"] },
    { name: "level", label: "Academic level", type: "select", placeholder: "Select level", options: ["High school", "Undergraduate", "Graduate", "Professional"] },
  ]} buildPrompt={(v) => `Write a ${v.length?.toLowerCase()} ${v.type?.toLowerCase()} essay at a ${v.level?.toLowerCase()} level on: ${v.topic}`} />;
}
