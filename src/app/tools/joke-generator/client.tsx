"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Joke Generator" description="Generate hilarious jokes on any topic." systemPrompt="You are a professional comedy writer. Generate 5 original, genuinely funny jokes that match the requested style. Prioritize clever wordplay and unexpected punchlines over cheap humor. Output ONLY the numbered jokes." fields={[
    { name: "style", label: "Joke style", type: "select", placeholder: "Select style", options: ["One-liner", "Pun", "Knock-knock", "Dad joke", "Dark humor", "Observational", "Absurdist", "Roast"] },
    { name: "topic", label: "Topic", type: "text", placeholder: "e.g. Programming, cats, Monday mornings" },
    { name: "audience", label: "Audience", type: "select", placeholder: "Select audience", options: ["General", "Kids", "Adults", "Work-appropriate", "Friends"] },
  ]} buildPrompt={(v) => `Generate 5 ${v.audience?.toLowerCase()}-appropriate ${v.style?.toLowerCase()} jokes about: ${v.topic}`} />;
}
