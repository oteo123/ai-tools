"use client";

export default function PricingSection({ toolCount }: { toolCount: number }) {
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  return (
    <section id="pricing" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <div className="p-6 rounded-xl border border-border bg-surface">
          <h3 className="font-bold text-lg mb-2">Free</h3>
          <p className="text-3xl font-bold mb-4">$0</p>
          <ul className="text-sm text-muted space-y-2 text-left">
            <li>5 uses per tool per day</li>
            <li>All {toolCount}+ tools</li>
            <li>No sign-up required</li>
          </ul>
        </div>
        <div className="p-6 rounded-xl border border-accent bg-surface">
          <h3 className="font-bold text-lg mb-2 text-accent">Pro</h3>
          <p className="text-3xl font-bold mb-4">$19<span className="text-sm text-muted">/mo</span></p>
          <ul className="text-sm text-muted space-y-2 text-left">
            <li>Unlimited uses</li>
            <li>Priority speed</li>
            <li>API access</li>
            <li>No ads</li>
          </ul>
          <button
            onClick={handleCheckout}
            className="mt-4 w-full py-2 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium transition-colors"
          >
            Get Pro — $19/mo
          </button>
        </div>
      </div>
    </section>
  );
}
