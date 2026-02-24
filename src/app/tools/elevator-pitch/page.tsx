"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Elevator Pitch Generator" description="Create a punchy 30-60 second elevator pitch." systemPrompt="You are an executive communication coach. Write a concise, memorable elevator pitch (30-60 seconds when spoken). Hook the listener immediately, clearly state the value proposition, and end with a call to action. Output ONLY the pitch." fields={[
    { name: "subject", label: "What are you pitching?", type: "text", placeholder: "e.g. A new SaaS product, yourself for a job, a nonprofit" },
    { name: "audience", label: "Who's the audience?", type: "text", placeholder: "e.g. Investors, potential employer, potential client" },
    { name: "uniqueValue", label: "What makes it unique?", type: "textarea", placeholder: "e.g. We're 10x faster than competitors, I have 15 years of experience in..." },
    { name: "tone", label: "Tone", type: "select", placeholder: "Select tone", options: ["Confident", "Conversational", "Passionate", "Professional", "Energetic"] },
  ]} buildPrompt={(v) => `Write a ${v.tone?.toLowerCase()} elevator pitch for: ${v.subject}\n\nAudience: ${v.audience}\nUnique value: ${v.uniqueValue}`} />;
}
