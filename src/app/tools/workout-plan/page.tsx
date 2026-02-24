import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Workout Plan Generator — Free AI Tool | AI Tools Pro",
  description: "Get a personalized workout plan tailored to your goals. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Workout Plan Generator — Free AI Tool | AI Tools Pro",
    description: "Get a personalized workout plan tailored to your goals. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/workout-plan",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workout Plan Generator — Free AI Tool | AI Tools Pro",
    description: "Get a personalized workout plan tailored to your goals. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
