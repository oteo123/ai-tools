"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Sales Script Generator" description="Write persuasive sales scripts that close deals." systemPrompt="You are a top sales trainer. Write natural, conversational sales scripts with a strong opener, discovery questions, value presentation, objection handling, and close. Avoid sounding robotic. Include prospect response placeholders. Output ONLY the sales script." fields={[
    { name: "product", label: "Product or service", type: "text", placeholder: "e.g. CRM software, marketing consulting" },
    { name: "type", label: "Sales type", type: "select", placeholder: "Select type", options: ["Cold Call", "Discovery Call", "Demo/Presentation", "Follow-Up Call", "Closing Call"] },
    { name: "audience", label: "Target prospect", type: "text", placeholder: "e.g. SaaS startup founders, restaurant owners" },
    { name: "value_props", label: "Key value propositions", type: "textarea", placeholder: "e.g. Saves 10 hours/week, 3x ROI, used by 500+ companies" },
  ]} buildPrompt={(v) => `Write a ${v.type?.toLowerCase()} sales script for ${v.product} targeting ${v.audience}.\n\nKey value props: ${v.value_props}`} />;
}
