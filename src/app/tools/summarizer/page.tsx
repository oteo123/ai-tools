"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Text Summarizer" description="Condense long text into key points." systemPrompt="You are an expert at distilling information. Summarize the given text into clear, concise bullet points and a one-paragraph summary. Output ONLY the summary." fields={[
    { name: "text", label: "Text to summarize", type: "textarea", placeholder: "Paste the text you want summarized..." },
    { name: "length", label: "Summary length", type: "select", placeholder: "Select length", options: ["1-2 sentences", "Short paragraph", "Detailed bullet points"] },
  ]} buildPrompt={(v) => `Summarize this text as ${v.length?.toLowerCase()}:\n\n${v.text}`} />;
}
