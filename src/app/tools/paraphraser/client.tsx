"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Text Paraphraser" description="Rewrite text while keeping the meaning." systemPrompt="You are an expert editor. Rewrite the given text in a fresh way while preserving the original meaning. Provide 3 versions: simpler, same level, and more sophisticated. Label each version. Output ONLY the rewritten versions." fields={[
    { name: "text", label: "Text to paraphrase", type: "textarea", placeholder: "Paste the text you want to rewrite..." },
    { name: "style", label: "Style", type: "select", placeholder: "Select style", options: ["More casual", "More formal", "More concise", "More detailed", "Academic"] },
  ]} buildPrompt={(v) => `Paraphrase this text in a ${v.style?.toLowerCase()} style:\n\n${v.text}`} />;
}
