"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Recipe Generator" description="Generate delicious recipes based on your ingredients and preferences." systemPrompt="You are a professional chef. Create detailed, easy-to-follow recipes with exact measurements, step-by-step instructions, prep time, cook time, and serving size. Output ONLY the recipe." fields={[
    { name: "ingredients", label: "Ingredients you have", type: "textarea", placeholder: "e.g. chicken thighs, garlic, lemon, rice, broccoli" },
    { name: "cuisine", label: "Cuisine preference", type: "select", placeholder: "Select cuisine", options: ["Any", "Italian", "Mexican", "Asian", "Indian", "Mediterranean", "American", "French"] },
    { name: "difficulty", label: "Difficulty", type: "select", placeholder: "Select difficulty", options: ["Quick & Easy (under 30 min)", "Medium (30-60 min)", "Advanced (60+ min)"] },
    { name: "dietary", label: "Dietary needs (optional)", type: "text", placeholder: "e.g. Low-carb, dairy-free, high-protein" },
  ]} buildPrompt={(v) => `Create a ${v.difficulty?.toLowerCase()} ${v.cuisine !== "Any" ? v.cuisine + " " : ""}recipe using these ingredients: ${v.ingredients}${v.dietary ? `\n\nDietary needs: ${v.dietary}` : ""}`} />;
}
