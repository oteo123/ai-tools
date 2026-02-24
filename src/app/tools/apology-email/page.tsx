"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Apology Email Writer" description="Write sincere, effective apology emails." systemPrompt="You are a communication expert specializing in conflict resolution. Write a sincere apology email that acknowledges the mistake clearly, takes responsibility without excuses, expresses genuine empathy, and offers a concrete plan to make it right. Keep it concise and dignified. Output ONLY the email." fields={[
    { name: "context", label: "What happened?", type: "textarea", placeholder: "e.g. Missed an important client deadline by 3 days" },
    { name: "recipient", label: "Who are you apologizing to?", type: "text", placeholder: "e.g. Client, boss, team, customer" },
    { name: "tone", label: "Tone", type: "select", placeholder: "Select tone", options: ["Professional", "Sincere & personal", "Formal", "Humble", "Direct"] },
    { name: "resolution", label: "How will you fix it?", type: "textarea", placeholder: "e.g. Offering 20% discount, implementing new tracking system, delivering revised work by Friday" },
  ]} buildPrompt={(v) => `Write a ${v.tone?.toLowerCase()} apology email to ${v.recipient}.\n\nWhat happened: ${v.context}\nResolution: ${v.resolution}`} />;
}
