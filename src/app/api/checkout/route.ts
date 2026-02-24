import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
    }

    const origin = req.headers.get("origin") || "https://ai-tools-woad-six.vercel.app";
    const params = new URLSearchParams();
    params.append("mode", "subscription");
    params.append("payment_method_types[0]", "card");
    params.append("line_items[0][price_data][currency]", "usd");
    params.append("line_items[0][price_data][product_data][name]", "AI Tools Pro — Unlimited Access");
    params.append("line_items[0][price_data][unit_amount]", "1900");
    params.append("line_items[0][price_data][recurring][interval]", "month");
    params.append("line_items[0][quantity]", "1");
    params.append("success_url", `${origin}/success`);
    params.append("cancel_url", `${origin}/#pricing`);

    const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = await res.json();
    if (!res.ok) {
      return NextResponse.json({ error: data.error?.message || "Checkout failed" }, { status: 500 });
    }

    return NextResponse.json({ url: data.url });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Checkout failed";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
