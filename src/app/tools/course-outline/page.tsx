import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Course Outline Generator — Free AI Tool | AI Tools Pro",
  description: "Design a structured online course curriculum. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Course Outline Generator — Free AI Tool | AI Tools Pro",
    description: "Design a structured online course curriculum. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/course-outline",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Course Outline Generator — Free AI Tool | AI Tools Pro",
    description: "Design a structured online course curriculum. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
