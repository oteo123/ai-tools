"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Flashcard Generator" description="Create effective study flashcards on any topic." systemPrompt="You are a learning science expert skilled in spaced repetition. Generate 20 flashcards with clear, concise questions on the front and accurate, memorable answers on the back. Use a mix of recall, definition, and application questions. Format each as 'Q:' and 'A:' pairs. Prioritize the most testable concepts. Output ONLY the numbered flashcards." fields={[
    { name: "subject", label: "Subject and topic", type: "text", placeholder: "e.g. AP Biology — Cell Division, Spanish Vocabulary — Travel" },
    { name: "level", label: "Academic level", type: "select", placeholder: "Select level", options: ["High school", "AP/IB", "Undergraduate", "Graduate", "Language learning", "Professional"] },
    { name: "focus", label: "Specific focus areas (optional)", type: "textarea", placeholder: "e.g. Mitosis vs meiosis, irregular verbs only, key dates and figures" },
    { name: "style", label: "Card style", type: "select", placeholder: "Select style", options: ["Definition-based", "Concept application", "Fill-in-the-blank", "True/False", "Mixed"] },
  ]} buildPrompt={(v) => `Generate 20 ${v.style?.toLowerCase()} flashcards for ${v.level?.toLowerCase()} level: ${v.subject}${v.focus ? `\n\nFocus: ${v.focus}` : ""}`} />;
}
