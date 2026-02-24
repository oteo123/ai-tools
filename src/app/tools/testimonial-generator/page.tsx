"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Testimonial Generator" description="Generate realistic testimonial templates for your product." systemPrompt="You are a marketing copywriter. Generate 5 realistic, authentic-sounding customer testimonial templates based on the product details provided. Each should highlight different benefits, include a specific result or outcome, and sound like a real person (not marketing-speak). Include suggested customer persona for each. Output ONLY the numbered testimonials with persona labels." fields={[
    { name: "product", label: "Product or service", type: "text", placeholder: "e.g. Email marketing platform, fitness coaching app" },
    { name: "benefits", label: "Key benefits customers experience", type: "textarea", placeholder: "e.g. Saves 5 hours/week, increased open rates 40%, easy to use" },
    { name: "audience", label: "Customer types", type: "text", placeholder: "e.g. Marketing managers, solopreneurs, e-commerce founders" },
    { name: "style", label: "Style", type: "select", placeholder: "Select style", options: ["Short & punchy", "Detailed story", "Results-focused", "Emotional", "Professional"] },
  ]} buildPrompt={(v) => `Generate 5 ${v.style?.toLowerCase()} customer testimonial templates for: ${v.product}\n\nKey benefits: ${v.benefits}\nCustomer types: ${v.audience}`} />;
}
