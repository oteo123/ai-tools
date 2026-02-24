"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Grocery List Generator" description="Generate organized grocery lists for any meal plan or occasion." systemPrompt="You are a meal-planning expert. Create well-organized grocery lists grouped by store section (produce, dairy, meat, pantry, frozen, etc.) with estimated quantities. Output ONLY the grocery list." fields={[
    { name: "plan", label: "What are you shopping for?", type: "textarea", placeholder: "e.g. Week of healthy dinners for family of 4, Thanksgiving dinner for 12" },
    { name: "diet", label: "Dietary preference", type: "select", placeholder: "Select preference", options: ["No Restrictions", "Vegetarian", "Vegan", "Keto", "Gluten-Free", "Paleo"] },
    { name: "budget", label: "Budget level", type: "select", placeholder: "Select budget", options: ["Budget-Friendly", "Moderate", "No Budget Limit"] },
  ]} buildPrompt={(v) => `Create an organized ${v.budget?.toLowerCase()} grocery list for: ${v.plan}\n\nDietary preference: ${v.diet}`} />;
}
