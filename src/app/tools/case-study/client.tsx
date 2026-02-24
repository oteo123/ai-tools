"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Case Study Generator" description="Write professional case studies that showcase results." systemPrompt="You are a B2B content marketing expert. Write a compelling case study with these sections: Client Overview, Challenge, Solution, Implementation, Results (with specific metrics), and Key Takeaways. Use a narrative style that tells a story while backing claims with data. Include pull quotes. Output ONLY the case study." fields={[
    { name: "client", label: "Client name & industry", type: "text", placeholder: "e.g. TechStartup Inc., e-commerce SaaS" },
    { name: "challenge", label: "Challenge or problem they faced", type: "textarea", placeholder: "e.g. Manual inventory tracking causing $50K/year in lost sales from stockouts" },
    { name: "solution", label: "Your solution & how it was implemented", type: "textarea", placeholder: "e.g. Deployed our AI inventory system, integrated with Shopify in 2 weeks" },
    { name: "results", label: "Results & metrics", type: "textarea", placeholder: "e.g. 95% reduction in stockouts, $200K revenue recovered, 3x ROI in 6 months" },
  ]} buildPrompt={(v) => `Write a case study for ${v.client}.\n\nChallenge: ${v.challenge}\nSolution: ${v.solution}\nResults: ${v.results}`} />;
}
