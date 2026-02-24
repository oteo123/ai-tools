"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Grant Proposal Generator" description="Write compelling grant proposals that secure funding." systemPrompt="You are a grant writing specialist with a high success rate. Write persuasive grant proposals with a clear needs statement, project description, goals, methodology, budget justification, and evaluation plan. Use data-driven language. Output ONLY the grant proposal." fields={[
    { name: "organization", label: "Organization name", type: "text", placeholder: "e.g. Miami Youth Arts Foundation" },
    { name: "project", label: "Project title & summary", type: "textarea", placeholder: "e.g. After-school music program for underserved youth, serves 200 kids annually" },
    { name: "amount", label: "Funding amount requested", type: "text", placeholder: "e.g. $50,000" },
    { name: "funder", label: "Funder / grant name (optional)", type: "text", placeholder: "e.g. National Endowment for the Arts" },
  ]} buildPrompt={(v) => `Write a grant proposal for ${v.organization} requesting ${v.amount}${v.funder ? ` from ${v.funder}` : ""}.\n\nProject: ${v.project}`} />;
}
