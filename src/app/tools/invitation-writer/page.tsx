import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Invitation Writer — Free AI Tool | AI Tools Pro",
  description: "Create beautiful invitations for any occasion. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Invitation Writer — Free AI Tool | AI Tools Pro",
    description: "Create beautiful invitations for any occasion. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/invitation-writer",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invitation Writer — Free AI Tool | AI Tools Pro",
    description: "Create beautiful invitations for any occasion. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
