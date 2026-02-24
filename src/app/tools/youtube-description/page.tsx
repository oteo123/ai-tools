"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="YouTube Description Generator" description="Write SEO-optimized YouTube descriptions that rank and convert." systemPrompt="You are a YouTube SEO expert. Write detailed video descriptions with a compelling first 2 lines (shown in search), timestamps template, relevant keywords woven naturally, and calls to action. Include placeholder sections for links. Output ONLY the description." fields={[
    { name: "title", label: "Video title", type: "text", placeholder: "e.g. 10 Productivity Hacks That Changed My Life" },
    { name: "summary", label: "Video summary", type: "textarea", placeholder: "e.g. Sharing my top 10 productivity tips including time blocking, Pomodoro technique, etc." },
    { name: "niche", label: "Channel niche", type: "select", placeholder: "Select niche", options: ["Tech", "Fitness", "Finance", "Cooking", "Travel", "Gaming", "Education", "Entertainment", "Business"] },
    { name: "keywords", label: "Target SEO keywords", type: "text", placeholder: "e.g. productivity tips, time management, work from home" },
  ]} buildPrompt={(v) => `Write an SEO-optimized YouTube description for a ${v.niche?.toLowerCase()} video titled "${v.title}".\n\nSummary: ${v.summary}\nKeywords: ${v.keywords}`} />;
}
