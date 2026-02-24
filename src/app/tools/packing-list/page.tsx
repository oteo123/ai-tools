"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Packing List Generator" description="Never forget an essential item with a customized packing list." systemPrompt="You are a seasoned traveler who creates comprehensive, organized packing lists. Categorize items by type (clothing, toiletries, electronics, documents, etc.). Include quantities and pro tips. Output ONLY the packing list." fields={[
    { name: "destination", label: "Destination & climate", type: "text", placeholder: "e.g. Iceland in winter, Bali in summer" },
    { name: "duration", label: "Trip duration", type: "select", placeholder: "Select duration", options: ["Weekend (2-3 days)", "1 Week", "2 Weeks", "1 Month+"] },
    { name: "type", label: "Trip type", type: "select", placeholder: "Select type", options: ["Beach Vacation", "City Trip", "Hiking/Camping", "Business Trip", "Backpacking", "Cruise", "Ski Trip"] },
    { name: "extras", label: "Special needs (optional)", type: "text", placeholder: "e.g. Bringing a baby, photography gear, formal event" },
  ]} buildPrompt={(v) => `Create a packing list for a ${v.duration?.toLowerCase()} ${v.type?.toLowerCase()} to ${v.destination}.${v.extras ? `\n\nSpecial needs: ${v.extras}` : ""}`} />;
}
