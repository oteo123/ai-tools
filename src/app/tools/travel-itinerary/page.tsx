import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Travel Itinerary Generator — Free AI Tool | AI Tools Pro",
  description: "Plan the perfect trip with a detailed day-by-day itinerary. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Travel Itinerary Generator — Free AI Tool | AI Tools Pro",
    description: "Plan the perfect trip with a detailed day-by-day itinerary. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/travel-itinerary",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Itinerary Generator — Free AI Tool | AI Tools Pro",
    description: "Plan the perfect trip with a detailed day-by-day itinerary. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
