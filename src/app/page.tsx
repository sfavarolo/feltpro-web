import type { ReactNode } from "react";

// The Flutter timer app (separate Vercel project). Update if you add a custom
// domain like https://app.feltpro.com.
const APP_URL = "https://app.feltpro.app";

const features: { title: string; body: string; icon: string }[] = [
  {
    icon: "🖥️",
    title: "Runs on any screen",
    body: "Web-based — no install, no updates to chase. Open it on a laptop, tablet, or cast it to the big TV in the room.",
  },
  {
    icon: "🎯",
    title: "Built for live play",
    body: "Blind levels, breaks, antes, chip counts, and a clean full-screen clock the whole room can read from across the floor.",
  },
  {
    icon: "🏷️",
    title: "Your brand, your sponsors",
    body: "Add your casino or event logo and rotate sponsor logos — including a sponsor strip that runs during breaks.",
  },
  {
    icon: "☁️",
    title: "Cloud sync",
    body: "Sign in once and your tournaments follow you to any device. Set up at home, run it at the venue.",
  },
  {
    icon: "💸",
    title: "Pay per event — or subscribe",
    body: "Running one charity night? Pay $1/player. Running rooms every week? Subscribe and run unlimited tournaments.",
  },
  {
    icon: "📄",
    title: "Save, import & export",
    body: "Keep a library of recurring structures, duplicate last week's event, and export results to PDF or CSV.",
  },
];

type Tier = {
  name: string;
  tagline: string;
  price: string;
  unit: string;
  sub: string;
  cta: string;
  href: string;
  featured?: boolean;
  points: string[];
};

const tiers: Tier[] = [
  {
    name: "Single Event",
    tagline: "Run one tournament.",
    price: "$1",
    unit: "/ player",
    sub: "$10 minimum · pay per tournament",
    cta: "Start an event",
    href: APP_URL,
    points: [
      "One live tournament",
      "Full blind timer, breaks & antes",
      "Cloud sync across your devices",
    ],
  },
  {
    name: "Multi",
    tagline: "For regular organizers.",
    price: "$19.95",
    unit: "/ mo",
    sub: "or $149 / yr — save ~2 months",
    cta: "Start Multi",
    href: APP_URL,
    featured: true,
    points: [
      "Unlimited live tournaments",
      "Full blind timer, breaks & antes",
      "Cloud sync across your devices",
    ],
  },
  {
    name: "Multi+",
    tagline: "Everything, for venues.",
    price: "$39.95",
    unit: "/ mo",
    sub: "or $349 / yr — save ~2 months",
    cta: "Go Multi+",
    href: APP_URL,
    points: [
      "Everything in Multi",
      "Sponsors + sponsor strip on breaks",
      "Custom casino / event logos",
      "Saved tournament library",
      "Import / export + PDF / CSV",
      "Priority support",
    ],
  },
];

type Row = { label: string; single: Cell; multi: Cell; plus: Cell };
type Cell = boolean | string;

const compare: { group: string; rows: Row[] }[] = [
  {
    group: "Running tournaments",
    rows: [
      { label: "Live blind timer (levels, breaks, antes)", single: true, multi: true, plus: true },
      { label: "Tournaments", single: "1 event", multi: "Unlimited", plus: "Unlimited" },
      { label: "Full-screen clock / big-screen mode", single: true, multi: true, plus: true },
      { label: "Cloud sync across devices", single: true, multi: true, plus: true },
    ],
  },
  {
    group: "Branding",
    rows: [
      { label: "Custom casino / event logo", single: false, multi: false, plus: true },
      { label: "Sponsors + sponsor strip on breaks", single: false, multi: false, plus: true },
    ],
  },
  {
    group: "Power features",
    rows: [
      { label: "Saved tournament library", single: false, multi: false, plus: true },
      { label: "Import / export tournaments", single: false, multi: false, plus: true },
      { label: "PDF / CSV export", single: false, multi: false, plus: true },
      { label: "Priority support", single: false, multi: false, plus: true },
    ],
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "How does per-event pricing work?",
    a: "For one-off tournaments, pay $1 per player with a $10 minimum — so a 25-player event is $25. No subscription required.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. FeltPro runs in your browser on any device — laptop, tablet, or a TV browser. Sign in and you're running.",
  },
  {
    q: "Can I use it commercially (a casino or paid events)?",
    a: "Yes. The Multi and Multi+ plans are built for venues and revenue-generating events. Need a chain or custom terms? Talk to us.",
  },
  {
    q: "Will my tournaments sync between devices?",
    a: "Yes — sign in and your tournaments are saved to your account, so you can set up at home and run it at the venue.",
  },
];

function Check({ on }: { on: boolean }) {
  return on ? (
    <span className="text-emerald-400">✓</span>
  ) : (
    <span className="text-white/20">—</span>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-6 ${className}`}>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.18),transparent_70%)]" />

      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-white/5 bg-[#07090c]/80 backdrop-blur">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-emerald-500 text-sm font-black text-black">
              F
            </span>
            <span className="text-lg">FeltPro</span>
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="#features" className="hidden text-white/70 hover:text-white sm:block">
              Features
            </a>
            <a href="#pricing" className="text-white/70 hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="hidden text-white/70 hover:text-white sm:block">
              FAQ
            </a>
            <a
              href={APP_URL}
              className="rounded-full border border-white/15 px-4 py-1.5 text-white/90 transition hover:border-white/40 hover:text-white"
            >
              Sign in
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <Section id="top" className="pt-20 pb-16 text-center sm:pt-28">
        <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
          Tournament Poker Timer
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl">
          Run a poker tournament <span className="text-emerald-400">that looks pro.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
          FeltPro is the web-based blind timer for home games, charity nights, and
          casino floors. Sponsors, custom branding, cloud sync — on any screen,
          no install.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={APP_URL}
            className="w-full rounded-full bg-emerald-500 px-7 py-3.5 text-base font-bold text-black transition hover:bg-emerald-400 sm:w-auto"
          >
            Start free
          </a>
          <a
            href="#pricing"
            className="w-full rounded-full border border-white/15 px-7 py-3.5 text-base font-semibold text-white/90 transition hover:border-white/40 sm:w-auto"
          >
            See pricing
          </a>
        </div>
        <p className="mt-5 text-sm text-white/40">
          Works on laptop, tablet, or the big TV in the room.
        </p>
      </Section>

      {/* Feature grid */}
      <Section id="features" className="py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-500/30 hover:bg-white/[0.05]"
            >
              <div className="text-2xl">{f.icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="py-20">
        <div className="text-center">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Simple pricing.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Pay per event when you need it, or subscribe to run unlimited
            tournaments. No setup fees, cancel anytime.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-3xl border p-7 ${
                t.featured
                  ? "border-emerald-500/60 bg-emerald-500/[0.06]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="mt-1 text-sm text-white/50">{t.tagline}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-black">{t.price}</span>
                <span className="text-white/50">{t.unit}</span>
              </div>
              <p className="mt-1 text-xs text-white/40">{t.sub}</p>
              <a
                href={t.href}
                className={`mt-6 rounded-full px-5 py-3 text-center text-sm font-bold transition ${
                  t.featured
                    ? "bg-emerald-500 text-black hover:bg-emerald-400"
                    : "border border-white/15 text-white hover:border-white/40"
                }`}
              >
                {t.cta}
              </a>
              <ul className="mt-7 space-y-3 text-sm text-white/70">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enterprise */}
        <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-semibold">
              Enterprise <span className="font-normal text-white/40">— Custom</span>
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-white/55">
              For casino chains and multi-room operators: multiple staff
              accounts, white-label branding, SSO, and dedicated support.
            </p>
          </div>
          <a
            href="mailto:hello@feltpro.app"
            className="shrink-0 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
          >
            Talk to us
          </a>
        </div>

        {/* Comparison */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold">Compare what&apos;s included</h3>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-separate border-spacing-0 text-sm">
              <thead>
                <tr className="text-left">
                  <th className="w-1/2 pb-4 font-medium text-white/50">Features</th>
                  <th className="pb-4 text-center font-semibold">Single</th>
                  <th className="pb-4 text-center font-semibold text-emerald-300">Multi</th>
                  <th className="pb-4 text-center font-semibold">Multi+</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((g) => (
                  <FragmentGroup key={g.group} group={g.group} rows={g.rows} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="py-16">
        <h2 className="text-center text-4xl font-black tracking-tight">Questions</h2>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-white/10">
          {faqs.map((f) => (
            <div key={f.q} className="py-6">
              <h3 className="text-lg font-semibold">{f.q}</h3>
              <p className="mt-2 text-white/60">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16">
        <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/[0.07] p-10 text-center sm:p-14">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Your next tournament starts in two minutes.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            No install, no credit card to try it. Open the app and run your first
            clock.
          </p>
          <a
            href={APP_URL}
            className="mt-7 inline-block rounded-full bg-emerald-500 px-8 py-3.5 text-base font-bold text-black transition hover:bg-emerald-400"
          >
            Open FeltPro
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/5">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-white/40 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="grid h-5 w-5 place-items-center rounded bg-emerald-500 text-xs font-black text-black">
              F
            </span>
            <span>FeltPro</span>
          </div>
          <p>© {new Date().getFullYear()} FeltPro. All rights reserved.</p>
          <a href={APP_URL} className="hover:text-white">
            Open app →
          </a>
        </div>
      </footer>
    </div>
  );
}

function FragmentGroup({ group, rows }: { group: string; rows: Row[] }) {
  return (
    <>
      <tr>
        <td
          colSpan={4}
          className="border-t border-white/10 pt-6 pb-2 text-xs font-semibold uppercase tracking-wider text-emerald-300/80"
        >
          {group}
        </td>
      </tr>
      {rows.map((r) => (
        <tr key={r.label} className="border-t border-white/[0.06]">
          <td className="py-3 pr-4 text-white/70">{r.label}</td>
          <CellTd v={r.single} />
          <CellTd v={r.multi} />
          <CellTd v={r.plus} />
        </tr>
      ))}
    </>
  );
}

function CellTd({ v }: { v: Cell }) {
  return (
    <td className="py-3 text-center">
      {typeof v === "string" ? (
        <span className="text-white/70">{v}</span>
      ) : (
        <Check on={v} />
      )}
    </td>
  );
}
