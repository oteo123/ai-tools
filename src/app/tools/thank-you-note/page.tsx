"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Thank You Note Generator" description="Thoughtful thank-you notes for any occasion." systemPrompt="You are a thoughtful writer. Write warm, genuine thank-you notes that feel personal and heartfelt. Output ONLY the note." fields={[
    { name: "occasion", label: "What's it for?", type: "text", placeholder: "e.g. Wedding gift, job referral, birthday present" },
    { name: "recipient", label: "Who's it for?", type: "text", placeholder: "e.g. My aunt Susan" },
    { name: "details", label: "Specific details", type: "textarea", placeholder: "e.g. She gave us a KitchenAid mixer, she traveled from Ohio" },
  ]} buildPrompt={(v) => `Write a thank-you note for: ${v.occasion}\n\nTo: ${v.recipient}\n\nDetails: ${v.details}`} />;
}
