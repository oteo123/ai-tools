"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Startup Pitch Generator" description="Craft a compelling startup pitch deck script." systemPrompt="You are a Y Combinator-level startup pitch coach. Write a compelling, concise startup pitch that covers the problem, solution, market size, traction, business model, and ask. Use persuasive storytelling and concrete numbers where possible. Output ONLY the pitch script with section headers." fields={[
    { name: "startup", label: "Startup name & one-liner", type: "text", placeholder: "e.g. FreshBite — AI meal planning for busy families" },
    { name: "problem", label: "Problem you're solving", type: "textarea", placeholder: "e.g. Busy parents waste 3+ hours/week planning meals and grocery shopping" },
    { name: "solution", label: "Your solution", type: "textarea", placeholder: "e.g. AI generates personalized weekly meal plans with one-tap grocery ordering" },
    { name: "stage", label: "Stage", type: "select", placeholder: "Select stage", options: ["Pre-seed", "Seed", "Series A", "Series B", "Growth"] },
  ]} buildPrompt={(v) => `Write a ${v.stage} startup pitch for: ${v.startup}\n\nProblem: ${v.problem}\n\nSolution: ${v.solution}`} />;
}
