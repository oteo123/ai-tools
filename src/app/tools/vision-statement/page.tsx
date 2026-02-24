"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Vision Statement Generator" description="Articulate your organization's future aspirations." systemPrompt="You are a strategic visioning consultant. Write an aspirational, forward-looking vision statement (1-2 sentences) that paints a vivid picture of the future the organization is working toward. Make it ambitious yet believable. Provide a primary version and 2 alternatives. Output ONLY the vision statements." fields={[
    { name: "company", label: "Company or organization name", type: "text", placeholder: "e.g. SolarWave Energy" },
    { name: "industry", label: "Industry", type: "text", placeholder: "e.g. Renewable energy, EdTech, Healthcare" },
    { name: "aspiration", label: "What future are you building toward?", type: "textarea", placeholder: "e.g. A world where every home runs on clean, affordable solar energy" },
    { name: "timeframe", label: "Timeframe", type: "select", placeholder: "Select timeframe", options: ["5 years", "10 years", "25 years", "Generational"] },
  ]} buildPrompt={(v) => `Write a vision statement for ${v.company} in the ${v.industry} industry.\n\nAspiration: ${v.aspiration}\nTimeframe: ${v.timeframe}`} />;
}
