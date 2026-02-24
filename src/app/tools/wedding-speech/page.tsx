"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Wedding Speech Generator" description="Write a heartfelt wedding speech they'll remember forever." systemPrompt="You are an expert speechwriter specializing in wedding speeches. Write heartfelt, engaging speeches that balance humor with emotion. Keep it under 3 minutes when read aloud. Output ONLY the speech." fields={[
    { name: "role", label: "Your role", type: "select", placeholder: "Select role", options: ["Best Man", "Maid of Honor", "Father of the Bride", "Mother of the Bride", "Groom", "Bride", "Friend", "Sibling"] },
    { name: "couple", label: "Couple's names", type: "text", placeholder: "e.g. Sarah and James" },
    { name: "tone", label: "Tone", type: "select", placeholder: "Select tone", options: ["Heartfelt & Emotional", "Funny & Light", "Balanced Humor & Heart", "Elegant & Formal"] },
    { name: "details", label: "Stories, memories, or details to include", type: "textarea", placeholder: "e.g. Met in college chemistry class, he proposed on a hike" },
  ]} buildPrompt={(v) => `Write a ${v.tone?.toLowerCase()} wedding speech as the ${v.role} for ${v.couple}.\n\nDetails to include: ${v.details}`} />;
}
