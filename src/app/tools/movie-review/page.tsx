"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Movie Review Generator" description="Generate detailed, engaging movie reviews." systemPrompt="You are a seasoned film critic. Write insightful, well-structured movie reviews that cover plot, performances, direction, and cinematography without major spoilers. Output ONLY the review." fields={[
    { name: "movie", label: "Movie title", type: "text", placeholder: "e.g. Oppenheimer" },
    { name: "rating", label: "Your rating", type: "select", placeholder: "Select rating", options: ["1/5 - Terrible", "2/5 - Poor", "3/5 - Average", "4/5 - Great", "5/5 - Masterpiece"] },
    { name: "tone", label: "Review tone", type: "select", placeholder: "Select tone", options: ["Casual", "Professional", "Humorous", "Academic"] },
    { name: "thoughts", label: "Your thoughts", type: "textarea", placeholder: "e.g. Loved the acting but the pacing felt slow" },
  ]} buildPrompt={(v) => `Write a ${v.tone?.toLowerCase()} movie review for "${v.movie}" with a rating of ${v.rating}.\n\nMy thoughts: ${v.thoughts}`} />;
}
