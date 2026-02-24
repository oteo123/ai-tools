"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Real Estate Listing Generator" description="Create professional property listings that attract buyers." systemPrompt="You are a top-producing real estate agent. Write compelling MLS-style property descriptions that highlight key selling points, upgrades, and neighborhood benefits. Use power words that sell. Output ONLY the listing description." fields={[
    { name: "type", label: "Property type", type: "select", placeholder: "Select type", options: ["Single Family Home", "Condo", "Townhouse", "Multi-Family", "Land", "Commercial"] },
    { name: "details", label: "Property details", type: "text", placeholder: "e.g. 3 bed/2 bath, 1,800 sqft, built 2019" },
    { name: "location", label: "Location/neighborhood", type: "text", placeholder: "e.g. Coral Gables, FL near Miracle Mile" },
    { name: "features", label: "Key features & upgrades", type: "textarea", placeholder: "e.g. New roof, quartz counters, pool, walk to shops, top-rated schools" },
  ]} buildPrompt={(v) => `Write a real estate listing for a ${v.type?.toLowerCase()} (${v.details}) in ${v.location}.\n\nKey features: ${v.features}`} />;
}
