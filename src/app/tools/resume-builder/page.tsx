import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "AI Resume Builder — Free AI Tool | AI Tools Pro",
  description: "Stand-out resumes tailored to any job. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "AI Resume Builder — Free AI Tool | AI Tools Pro",
    description: "Stand-out resumes tailored to any job. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/resume-builder",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Resume Builder — Free AI Tool | AI Tools Pro",
    description: "Stand-out resumes tailored to any job. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
