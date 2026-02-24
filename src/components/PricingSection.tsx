"use client";

export default function PricingSection({ toolCount }: { toolCount: number }) {
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  return (
    <section id="pricing" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-2">Pricing</h2>
      <p className="text-sm text-accent font-medium mb-6">Launch week pricing — ends soon</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <div className="p-6 rounded-xl border border-border bg-surface">
          <h3 className="font-bold text-lg mb-2">Free</h3>
          <p className="text-3xl font-bold mb-4">$0</p>
          <ul className="text-sm text-muted space-y-2 text-left">
            <li>5 uses per tool per day</li>
            <li>All {toolCount}+ tools</li>
            <li>No sign-up required</li>
          </ul>
        </div>
        <div className="p-6 rounded-xl border border-accent bg-surface relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
            MOST POPULAR
          </div>
          <h3 className="font-bold text-lg mb-2 text-accent">Pro Monthly</h3>
          <p className="text-3xl font-bold mb-1">$19<span className="text-sm text-muted">/mo</span></p>
          <p className="text-xs text-muted line-through mb-4">$29/mo after launch</p>
          <ul className="text-sm text-muted space-y-2 text-left">
            <li>Unlimited uses</li>
            <li>Priority speed</li>
            <li>API access</li>
            <li>Cancel anytime</li>
          </ul>
          <button
            onClick={handleCheckout}
            className="mt-4 w-full py-2 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium transition-colors"
          >
            Get Pro — $19/mo
          </button>
        </div>
        <div className="p-6 rounded-xl border border-green-500/50 bg-surface relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            BEST VALUE
          </div>
          <h3 className="font-bold text-lg mb-2 text-green-400">Lifetime</h3>
          <p className="text-3xl font-bold mb-1">$99</p>
          <p className="text-xs text-muted mb-4">One-time payment, forever access</p>
          <ul className="text-sm text-muted space-y-2 text-left">
            <li>Everything in Pro</li>
            <li>Lifetime updates</li>
            <li>Pay once, use forever</li>
            <li>Launch week only</li>
          </ul>
          <a
            href="https://oteo5.gumroad.com/l/ai-tools-starter-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full py-2 rounded-lg bg-green-600 hover:bg-green-500 text-white font-medium transition-colors inline-block text-center"
          >
            Get Lifetime — $99
          </a>
        </div>
      </div>
    </section>
  );
}
