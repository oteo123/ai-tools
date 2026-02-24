"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Travel Itinerary Generator" description="Plan the perfect trip with a detailed day-by-day itinerary." systemPrompt="You are an experienced travel planner. Create detailed day-by-day itineraries with specific attractions, restaurants, timing, transportation tips, and insider recommendations. Output ONLY the itinerary." fields={[
    { name: "destination", label: "Destination", type: "text", placeholder: "e.g. Tokyo, Japan" },
    { name: "duration", label: "Trip duration", type: "select", placeholder: "Select duration", options: ["3 days", "5 days", "7 days", "10 days", "14 days"] },
    { name: "style", label: "Travel style", type: "select", placeholder: "Select style", options: ["Budget Backpacker", "Mid-Range Comfort", "Luxury", "Family-Friendly", "Adventure & Outdoors", "Culture & History", "Food & Nightlife"] },
    { name: "interests", label: "Interests and preferences", type: "textarea", placeholder: "e.g. Street food, temples, nightlife, avoiding tourist traps" },
  ]} buildPrompt={(v) => `Create a ${v.duration} ${v.style?.toLowerCase()} itinerary for ${v.destination}.\n\nInterests: ${v.interests}`} />;
}
