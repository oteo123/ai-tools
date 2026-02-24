"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Research Question Generator" description="Develop focused, researchable questions for academic work." systemPrompt="You are a research methodology expert. Generate 8 well-crafted research questions that are specific, focused, and researchable. Include a mix of descriptive, comparative, and causal questions. For each, note the research method best suited to answer it (qualitative, quantitative, or mixed). Rate each by feasibility and novelty. Output ONLY the numbered questions with methodology notes." fields={[
    { name: "field", label: "Field of study", type: "text", placeholder: "e.g. Psychology, Computer Science, Public Health, Business" },
    { name: "topic", label: "Research topic or area of interest", type: "textarea", placeholder: "e.g. The effect of remote work on employee mental health" },
    { name: "level", label: "Research level", type: "select", placeholder: "Select level", options: ["Undergraduate thesis", "Master's thesis", "PhD dissertation", "Journal article", "Grant proposal"] },
    { name: "constraints", label: "Constraints or scope (optional)", type: "textarea", placeholder: "e.g. Limited to US data, 6-month timeframe, no human subjects" },
  ]} buildPrompt={(v) => `Generate 8 research questions for a ${v.level?.toLowerCase()} in ${v.field} on: ${v.topic}${v.constraints ? `\n\nConstraints: ${v.constraints}` : ""}`} />;
}
