"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Invoice Template Generator" description="Create professional invoice templates for your business." systemPrompt="You are a business finance expert. Generate clean, professional invoice templates in a structured text format with all standard fields: invoice number, dates, line items, subtotals, tax, and payment terms. Use placeholder brackets for variable data. Output ONLY the invoice template." fields={[
    { name: "business", label: "Your business name", type: "text", placeholder: "e.g. Pontes Creative LLC" },
    { name: "type", label: "Invoice type", type: "select", placeholder: "Select type", options: ["Service Invoice", "Product Invoice", "Hourly Rate Invoice", "Recurring Invoice", "Project-Based Invoice"] },
    { name: "items", label: "Line items / services", type: "textarea", placeholder: "e.g. Logo design - $500, Brand guidelines - $300, Social media kit - $200" },
    { name: "terms", label: "Payment terms", type: "select", placeholder: "Select terms", options: ["Due on Receipt", "Net 15", "Net 30", "Net 60", "50% Upfront / 50% Completion"] },
  ]} buildPrompt={(v) => `Generate a ${v.type?.toLowerCase()} template for "${v.business}" with ${v.terms?.toLowerCase()} payment terms.\n\nLine items: ${v.items}`} />;
}
