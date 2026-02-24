"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Blog Post Generator" description="Full SEO-optimized blog posts from a single topic." systemPrompt="You are an expert content writer and SEO specialist. Write engaging, well-structured blog posts with headers, subheaders, and a conclusion. Use conversational yet authoritative tone. Output ONLY the blog post in markdown format." fields={[
    { name: "topic", label: "Blog topic", type: "text", placeholder: "e.g. 10 Ways to Boost Your Productivity with AI" },
    { name: "length", label: "Length", type: "select", placeholder: "Select length", options: ["Short (300 words)", "Medium (600 words)", "Long (1000+ words)"] },
    { name: "audience", label: "Target audience", type: "text", placeholder: "e.g. Small business owners, beginners" },
  ]} buildPrompt={(v) => `Write a ${v.length?.toLowerCase()} blog post about: ${v.topic}\n\nTarget audience: ${v.audience}`} />;
}
