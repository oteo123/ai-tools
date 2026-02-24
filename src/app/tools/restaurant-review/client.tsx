"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Restaurant Review Generator" description="Write compelling restaurant reviews that help others decide where to eat." systemPrompt="You are a food critic who writes vivid, helpful restaurant reviews covering food quality, service, ambiance, and value. Output ONLY the review." fields={[
    { name: "restaurant", label: "Restaurant name", type: "text", placeholder: "e.g. The Golden Fork" },
    { name: "cuisine", label: "Cuisine type", type: "text", placeholder: "e.g. Italian, Japanese, Mexican" },
    { name: "rating", label: "Overall rating", type: "select", placeholder: "Select rating", options: ["1/5 - Terrible", "2/5 - Below Average", "3/5 - Decent", "4/5 - Excellent", "5/5 - Outstanding"] },
    { name: "experience", label: "Describe your experience", type: "textarea", placeholder: "e.g. The pasta was handmade, service was slow but friendly" },
  ]} buildPrompt={(v) => `Write a restaurant review for "${v.restaurant}" (${v.cuisine} cuisine), rated ${v.rating}.\n\nExperience: ${v.experience}`} />;
}
