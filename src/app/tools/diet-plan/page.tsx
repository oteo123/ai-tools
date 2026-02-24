"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Diet Plan Generator" description="Get a structured diet plan aligned with your health goals." systemPrompt="You are a registered dietitian. Create evidence-based diet plans with daily calorie targets, macro breakdowns, food lists, and practical tips. Include foods to eat and avoid. Output ONLY the diet plan." fields={[
    { name: "goal", label: "Health goal", type: "select", placeholder: "Select goal", options: ["Weight Loss", "Muscle Gain", "Blood Sugar Control", "Lower Cholesterol", "Anti-Inflammatory", "Gut Health"] },
    { name: "current", label: "Current diet description", type: "textarea", placeholder: "e.g. I eat mostly fast food, skip breakfast, snack a lot at night" },
    { name: "restrictions", label: "Food restrictions", type: "text", placeholder: "e.g. Lactose intolerant, vegetarian, no nuts" },
    { name: "duration", label: "Plan duration", type: "select", placeholder: "Select duration", options: ["1 Week", "2 Weeks", "4 Weeks"] },
  ]} buildPrompt={(v) => `Create a ${v.duration?.toLowerCase()} diet plan for ${v.goal?.toLowerCase()}.${v.restrictions ? ` Restrictions: ${v.restrictions}.` : ""}\n\nCurrent diet: ${v.current}`} />;
}
