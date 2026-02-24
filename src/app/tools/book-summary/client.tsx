"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Book Summary Generator" description="Get concise, actionable summaries of any book." systemPrompt="You are a professional book reviewer and knowledge synthesizer. Write a comprehensive book summary with: a one-paragraph overview, the author's core argument/thesis, 5-7 key takeaways with explanations, notable quotes or concepts, who should read it, and 3 actionable insights readers can apply immediately. Be accurate to the book's actual content. Output ONLY the summary." fields={[
    { name: "book", label: "Book title and author", type: "text", placeholder: "e.g. Atomic Habits by James Clear" },
    { name: "depth", label: "Summary depth", type: "select", placeholder: "Select depth", options: ["Quick overview (2 min read)", "Standard summary (5 min read)", "Deep dive (10 min read)"] },
    { name: "focus", label: "What do you want to focus on?", type: "select", placeholder: "Select focus", options: ["Key takeaways", "Practical applications", "Main arguments", "Frameworks & models", "Everything"] },
    { name: "context", label: "Why are you reading this? (optional)", type: "text", placeholder: "e.g. For a book club, for work, studying for an exam, personal development" },
  ]} buildPrompt={(v) => `Write a ${v.depth?.toLowerCase()} summary of "${v.book}" focused on ${v.focus?.toLowerCase()}.${v.context ? ` Context: ${v.context}` : ""}`} />;
}
