"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="App Review Generator" description="Write helpful app store reviews that inform other users." systemPrompt="You are a tech-savvy app reviewer. Write balanced, specific app reviews covering usability, features, performance, and value. Output ONLY the review." fields={[
    { name: "app", label: "App name", type: "text", placeholder: "e.g. Notion, Duolingo" },
    { name: "rating", label: "Star rating", type: "select", placeholder: "Select rating", options: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"] },
    { name: "platform", label: "Platform", type: "select", placeholder: "Select platform", options: ["iOS", "Android", "Web", "Desktop"] },
    { name: "thoughts", label: "What did you like or dislike?", type: "textarea", placeholder: "e.g. Great UI but crashes frequently on older devices" },
  ]} buildPrompt={(v) => `Write a ${v.rating} app store review for "${v.app}" on ${v.platform}.\n\nThoughts: ${v.thoughts}`} />;
}
