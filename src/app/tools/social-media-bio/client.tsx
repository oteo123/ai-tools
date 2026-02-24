"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Social Media Bio Generator" description="Craft a standout social media bio that captures who you are." systemPrompt="You are a personal branding expert. Write concise, memorable social media bios that convey personality and purpose within character limits. Include relevant keywords and a clear value proposition. Provide 5 options. Output ONLY the bios, numbered." fields={[
    { name: "platform", label: "Platform", type: "select", placeholder: "Select platform", options: ["Instagram", "Twitter/X", "LinkedIn", "TikTok", "YouTube", "Pinterest"] },
    { name: "role", label: "Who are you?", type: "text", placeholder: "e.g. Fitness coach, freelance designer, travel blogger" },
    { name: "vibe", label: "Vibe", type: "select", placeholder: "Select vibe", options: ["Professional & Authoritative", "Creative & Quirky", "Minimalist & Clean", "Fun & Energetic", "Inspirational"] },
    { name: "details", label: "Key details to include", type: "textarea", placeholder: "e.g. Based in Miami, 10+ years experience, DM for collabs, link to podcast" },
  ]} buildPrompt={(v) => `Write 5 ${v.vibe?.toLowerCase()} ${v.platform} bio options for a ${v.role}.\n\nInclude: ${v.details}`} />;
}
