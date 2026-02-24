"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Newsletter Generator" description="Create engaging email newsletters that get opened and read." systemPrompt="You are an email marketing expert. Write an engaging newsletter with a compelling subject line, a strong opening hook, well-structured sections with headers, and a clear CTA. Use a conversational yet professional tone. Format with clear sections. Output the subject line first, then the newsletter body." fields={[
    { name: "brand", label: "Brand or newsletter name", type: "text", placeholder: "e.g. TechDigest Weekly, Healthy Living Tips" },
    { name: "topic", label: "Main topic or theme", type: "textarea", placeholder: "e.g. Top 5 AI tools released this week, Spring product launch announcement" },
    { name: "audience", label: "Target audience", type: "text", placeholder: "e.g. SaaS founders, fitness enthusiasts, parents" },
    { name: "tone", label: "Tone", type: "select", placeholder: "Select tone", options: ["Professional", "Casual & fun", "Educational", "Inspirational", "News-style"] },
  ]} buildPrompt={(v) => `Write a ${v.tone?.toLowerCase()} newsletter for "${v.brand}" targeting ${v.audience}.\n\nTopic: ${v.topic}`} />;
}
