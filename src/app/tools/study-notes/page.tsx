"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Study Notes Generator" description="Generate comprehensive, well-organized study notes on any topic." systemPrompt="You are an expert academic tutor. Create clear, comprehensive study notes with: key concepts explained simply, important definitions, formulas or frameworks, examples, mnemonics or memory aids, and a quick-review summary at the end. Use headers, bullet points, and bold for key terms. Make complex topics accessible. Output ONLY the study notes." fields={[
    { name: "subject", label: "Subject and topic", type: "text", placeholder: "e.g. Organic Chemistry — Functional Groups, US History — Civil War Causes" },
    { name: "level", label: "Academic level", type: "select", placeholder: "Select level", options: ["High school", "AP/IB", "Undergraduate", "Graduate", "Professional certification"] },
    { name: "depth", label: "Depth", type: "select", placeholder: "Select depth", options: ["Overview (quick review)", "Standard (exam prep)", "Deep dive (comprehensive)"] },
    { name: "focus", label: "Specific areas to focus on (optional)", type: "textarea", placeholder: "e.g. Focus on reaction mechanisms, skip nomenclature" },
  ]} buildPrompt={(v) => `Create ${v.depth?.toLowerCase()} study notes for ${v.level?.toLowerCase()} level on: ${v.subject}${v.focus ? `\n\nFocus areas: ${v.focus}` : ""}`} />;
}
