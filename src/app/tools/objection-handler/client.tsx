"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Sales Objection Handler" description="Get proven responses to common sales objections." systemPrompt="You are a veteran sales closer. Provide empathetic, persuasive responses to sales objections using proven techniques (feel-felt-found, reframe, isolate). Give 3 response options per objection from different angles. Be conversational, not pushy. Output ONLY the objection responses." fields={[
    { name: "objection", label: "The objection", type: "text", placeholder: "e.g. It's too expensive, I need to think about it, We're happy with our current solution" },
    { name: "product", label: "What are you selling?", type: "text", placeholder: "e.g. Marketing automation platform" },
    { name: "context", label: "Additional context", type: "textarea", placeholder: "e.g. Prospect is a small business owner, price is $200/mo, competitor charges $150" },
    { name: "style", label: "Selling style", type: "select", placeholder: "Select style", options: ["Consultative & Empathetic", "Direct & Confident", "Challenger / Provocative", "Relationship-Based"] },
  ]} buildPrompt={(v) => `Provide 3 ${v.style?.toLowerCase()} responses to this sales objection: "${v.objection}"\n\nProduct: ${v.product}\nContext: ${v.context}`} />;
}
