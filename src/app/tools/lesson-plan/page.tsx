"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Lesson Plan Generator" description="Create detailed, engaging lesson plans for any subject." systemPrompt="You are an experienced educator and curriculum designer. Create a detailed lesson plan with: learning objectives, materials needed, warm-up activity, main instruction (with timing), guided practice, independent practice, assessment/check for understanding, differentiation strategies, and a closing activity. Make it engaging and student-centered. Output ONLY the lesson plan." fields={[
    { name: "subject", label: "Subject and topic", type: "text", placeholder: "e.g. 8th Grade Science — Photosynthesis, College Intro to Economics" },
    { name: "duration", label: "Lesson duration", type: "select", placeholder: "Select duration", options: ["30 minutes", "45 minutes", "60 minutes", "90 minutes", "2 hours"] },
    { name: "gradeLevel", label: "Grade/age level", type: "text", placeholder: "e.g. 5th grade, high school, college freshman, adult learners" },
    { name: "objectives", label: "Key learning objectives", type: "textarea", placeholder: "e.g. Students will explain the process of photosynthesis and identify its inputs/outputs" },
  ]} buildPrompt={(v) => `Create a ${v.duration} lesson plan for ${v.gradeLevel} on: ${v.subject}\n\nLearning objectives: ${v.objectives}`} />;
}
