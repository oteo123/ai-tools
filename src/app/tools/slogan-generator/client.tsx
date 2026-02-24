"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Slogan Generator" description="Catchy slogans that stick." systemPrompt="You are a creative advertising copywriter. Generate catchy, memorable slogans and taglines. Provide 15 options ranging from punchy to descriptive. Output ONLY the slogans, numbered." fields={[
    { name: "brand", label: "Brand or product", type: "text", placeholder: "e.g. EcoClean — eco-friendly cleaning products" },
    { name: "tone", label: "Tone", type: "select", placeholder: "Select tone", options: ["Bold & Confident", "Witty & Clever", "Warm & Friendly", "Professional", "Edgy"] },
  ]} buildPrompt={(v) => `Generate 15 ${v.tone?.toLowerCase()} slogans for: ${v.brand}`} />;
}
