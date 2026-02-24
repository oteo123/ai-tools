"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Meal Plan Generator" description="Get a balanced weekly meal plan customized to your needs." systemPrompt="You are a certified nutritionist. Create balanced, practical weekly meal plans with breakfast, lunch, dinner, and snacks. Include approximate calories and macros per meal. Output ONLY the meal plan." fields={[
    { name: "goal", label: "Dietary goal", type: "select", placeholder: "Select goal", options: ["Weight Loss", "Muscle Building", "Maintenance", "Heart Health", "Energy Boost"] },
    { name: "diet", label: "Diet type", type: "select", placeholder: "Select diet", options: ["No Restrictions", "Vegetarian", "Vegan", "Keto", "Paleo", "Mediterranean", "Gluten-Free"] },
    { name: "meals", label: "Meals per day", type: "select", placeholder: "Select meals", options: ["3 meals", "3 meals + 2 snacks", "4 meals", "5 small meals"] },
    { name: "restrictions", label: "Allergies or restrictions", type: "text", placeholder: "e.g. No dairy, nut allergy, no shellfish" },
  ]} buildPrompt={(v) => `Create a 7-day ${v.diet?.toLowerCase()} meal plan for ${v.goal?.toLowerCase()} with ${v.meals}.${v.restrictions ? `\n\nRestrictions: ${v.restrictions}` : ""}`} />;
}
