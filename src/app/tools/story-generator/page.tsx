"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="AI Story Generator" description="Generate captivating short fiction stories instantly." systemPrompt="You are a master storyteller. Write vivid, engaging short fiction with compelling characters, conflict, and resolution. Use sensory details and tight prose. Output ONLY the story." fields={[
    { name: "genre", label: "Genre", type: "select", placeholder: "Select genre", options: ["Fantasy", "Sci-Fi", "Romance", "Horror", "Mystery", "Literary Fiction", "Adventure", "Thriller"] },
    { name: "premise", label: "Story premise or idea", type: "text", placeholder: "e.g. A lonely lighthouse keeper finds a message in a bottle" },
    { name: "length", label: "Length", type: "select", placeholder: "Select length", options: ["Flash fiction (under 500 words)", "Short (500-1000 words)", "Medium (1000-2000 words)"] },
    { name: "details", label: "Additional details", type: "textarea", placeholder: "e.g. Set in 1920s, first-person perspective, twist ending" },
  ]} buildPrompt={(v) => `Write a ${v.length?.toLowerCase()} ${v.genre?.toLowerCase()} story about: ${v.premise}\n\nAdditional details: ${v.details}`} />;
}
