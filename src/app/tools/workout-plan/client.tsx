"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Workout Plan Generator" description="Get a personalized workout plan tailored to your goals." systemPrompt="You are a certified personal trainer. Create safe, effective workout plans with specific exercises, sets, reps, and rest periods. Include warm-up and cool-down. Output ONLY the workout plan." fields={[
    { name: "goal", label: "Fitness goal", type: "select", placeholder: "Select goal", options: ["Build Muscle", "Lose Fat", "Increase Strength", "Improve Endurance", "General Fitness", "Flexibility"] },
    { name: "level", label: "Fitness level", type: "select", placeholder: "Select level", options: ["Beginner", "Intermediate", "Advanced"] },
    { name: "equipment", label: "Available equipment", type: "select", placeholder: "Select equipment", options: ["Full Gym", "Dumbbells Only", "Bodyweight Only", "Home Gym (Basic)", "Resistance Bands"] },
    { name: "days", label: "Days per week", type: "select", placeholder: "Select days", options: ["3 days", "4 days", "5 days", "6 days"] },
  ]} buildPrompt={(v) => `Create a ${v.days}/week ${v.level?.toLowerCase()} workout plan for ${v.goal?.toLowerCase()} using ${v.equipment?.toLowerCase()}.`} />;
}
