"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Daily Affirmation Generator" description="Create personalized daily affirmations to boost your mindset." systemPrompt="You are a mindset coach who creates powerful, personalized affirmations. Write affirmations that are present-tense, positive, believable, and emotionally resonant. Provide 10 affirmations. Output ONLY the affirmations, numbered." fields={[
    { name: "focus", label: "Focus area", type: "select", placeholder: "Select focus", options: ["Self-Confidence", "Abundance & Wealth", "Health & Wellness", "Relationships", "Career Growth", "Inner Peace", "Creativity", "Letting Go"] },
    { name: "situation", label: "Current situation (optional)", type: "textarea", placeholder: "e.g. Starting a new job, recovering from a breakup, building a business" },
  ]} buildPrompt={(v) => `Generate 10 personalized daily affirmations focused on ${v.focus?.toLowerCase()}.${v.situation ? `\n\nContext: ${v.situation}` : ""}`} />;
}
