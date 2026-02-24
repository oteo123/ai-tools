import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="text-center py-32">
      <h1 className="text-4xl font-bold mb-4">Welcome to Pro!</h1>
      <p className="text-muted text-lg mb-8">You now have unlimited access to all 100+ AI tools.</p>
      <Link href="/" className="px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium transition-colors">
        Start Using Tools
      </Link>
    </div>
  );
}
