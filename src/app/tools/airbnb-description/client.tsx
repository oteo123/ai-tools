"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Airbnb Description Generator" description="Write an irresistible Airbnb listing that books fast." systemPrompt="You are an Airbnb Superhost copywriter. Write compelling, detailed listing descriptions that highlight unique features, nearby attractions, and guest experience. Use sensory language. Include a catchy title. Output ONLY the listing description." fields={[
    { name: "property", label: "Property type", type: "select", placeholder: "Select type", options: ["Entire Apartment", "Entire House", "Private Room", "Studio", "Cabin", "Villa", "Loft", "Tiny Home"] },
    { name: "location", label: "Location", type: "text", placeholder: "e.g. Downtown Austin, beachfront Malibu" },
    { name: "guests", label: "Max guests & bedrooms", type: "text", placeholder: "e.g. 4 guests, 2 bedrooms, 1 bath" },
    { name: "features", label: "Key features & amenities", type: "textarea", placeholder: "e.g. Rooftop terrace, hot tub, ocean view, designer kitchen, walk to beach" },
  ]} buildPrompt={(v) => `Write an Airbnb listing description for a ${v.property?.toLowerCase()} in ${v.location} (${v.guests}).\n\nFeatures: ${v.features}`} />;
}
