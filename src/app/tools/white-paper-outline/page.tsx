"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="White Paper Outline Generator" description="Create structured white paper outlines for thought leadership." systemPrompt="You are a B2B content strategist specializing in thought leadership. Create a detailed white paper outline with: a compelling title, executive summary outline, 5-7 major sections with subsections, key data points to include, and a conclusion framework. Each section should have a 1-sentence description of what it covers. Output ONLY the outline." fields={[
    { name: "topic", label: "White paper topic", type: "text", placeholder: "e.g. The Future of Remote Work in Enterprise" },
    { name: "audience", label: "Target audience", type: "text", placeholder: "e.g. C-suite executives, HR leaders, IT directors" },
    { name: "thesis", label: "Core argument or thesis", type: "textarea", placeholder: "e.g. Companies that adopt async-first communication will outperform peers by 2x" },
    { name: "length", label: "Target length", type: "select", placeholder: "Select length", options: ["Short (5-10 pages)", "Medium (10-20 pages)", "Long (20-30 pages)"] },
  ]} buildPrompt={(v) => `Create a ${v.length?.toLowerCase()} white paper outline on: ${v.topic}\n\nAudience: ${v.audience}\nThesis: ${v.thesis}`} />;
}
