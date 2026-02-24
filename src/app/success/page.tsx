import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Pro — AI Tools",
};

export default function SuccessPage() {
  return (
    <div className="text-center py-24 max-w-xl mx-auto">
      <div className="text-6xl mb-6">✓</div>
      <h1 className="text-4xl font-bold mb-4">You're on Pro!</h1>
      <p className="text-muted text-lg mb-8">
        Your subscription is active. You now have unlimited access to all 102 AI tools.
      </p>
      <Link
        href="/"
        className="inline-block px-8 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium transition-colors"
      >
        Start Using Tools
      </Link>
    </div>
  );
}
