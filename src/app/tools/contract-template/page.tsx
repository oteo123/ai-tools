"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Contract Template Generator" description="Generate professional contract templates for any business need." systemPrompt="You are a business contract specialist. Generate clear, professional contract templates with standard clauses, defined terms, and placeholder fields marked with [BRACKETS]. Include standard legal protections. Note this is a template, not legal advice. Output ONLY the contract template." fields={[
    { name: "type", label: "Contract type", type: "select", placeholder: "Select type", options: ["Freelance/Contractor", "Non-Disclosure (NDA)", "Service Agreement", "Partnership Agreement", "Employment", "Licensing", "Lease Agreement"] },
    { name: "parties", label: "Parties involved", type: "text", placeholder: "e.g. Marketing agency and freelance designer" },
    { name: "scope", label: "Scope of work or purpose", type: "textarea", placeholder: "e.g. Website redesign project, 3-month engagement, $5,000 budget" },
  ]} buildPrompt={(v) => `Generate a ${v.type?.toLowerCase()} contract template between ${v.parties}.\n\nScope: ${v.scope}`} />;
}
