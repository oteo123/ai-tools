"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Course Outline Generator" description="Design a structured online course curriculum." systemPrompt="You are an instructional designer and online educator. Create a detailed course outline with: course title, learning objectives, module breakdown (6-10 modules), lessons within each module, activities/exercises, and assessment methods. Ensure logical progression from beginner to advanced concepts. Output ONLY the course outline." fields={[
    { name: "topic", label: "Course topic", type: "text", placeholder: "e.g. Introduction to Python Programming, Digital Marketing Fundamentals" },
    { name: "level", label: "Student level", type: "select", placeholder: "Select level", options: ["Complete beginner", "Some experience", "Intermediate", "Advanced"] },
    { name: "duration", label: "Course duration", type: "select", placeholder: "Select duration", options: ["2-4 hours (mini-course)", "4-8 hours (short course)", "8-20 hours (full course)", "20+ hours (bootcamp)"] },
    { name: "outcome", label: "What will students be able to do?", type: "textarea", placeholder: "e.g. Build and deploy a full-stack web app, run profitable ad campaigns" },
  ]} buildPrompt={(v) => `Create a ${v.duration?.toLowerCase()} course outline for ${v.level?.toLowerCase()} students on: ${v.topic}\n\nLearning outcome: ${v.outcome}`} />;
}
