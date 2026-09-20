import type { ReactNode } from "react";

// The Flutter timer app (separate Vercel project). Update if you add a custom
// domain like https://app.feltpro.com.
const APP_URL = "https://app.feltpro.app";

const features: { title: string; body: string; icon: string }[] = [
  {
    icon: "📱",
    title: "Remote Control — new",
    body: "Run the floor from your phone: pause the clock, add time, record rebuys and add-ons, update player counts — with the live clock in your hand. Included with Pro and every Event Pass.",
  },
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
    title: "Your name on the clock",
    body: "Put your company, venue and event on the big screen, with your own splash image while players find their seats.",
  },
  {
    icon: "☁️",
    title: "Cloud sync",
    body: "Sign in once and your tournaments follow you to any device. Set up at home, run it at the venue.",
  },
  {
    icon: "💸",
    title: "Free for home games",
    body: "Up to 10 players is free, for as many games as you like. Running a charity night? Buy one Event Pass. Running events all year? Go Pro.",
  },
  {
    icon: "📄",
    title: "A record you can trust",
    body: "Every rebuy, add-on and level change is logged with its time. Correct a finished event without re-running it, and every revision is kept as a locked copy.",
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
    name: "Home Game",
    tagline: "One table, friends, no card.",
    price: "Free",
    unit: "",
    sub: "up to 10 players · as many games as you like",
    cta: "Start free",
    href: APP_URL,
    points: [
      "Full blind timer, breaks & antes",
      "Rebuys, add-ons and chips in play",
      "Winners card at the end of the night",
      "Cloud sync across your devices",
    ],
  },
  {
    name: "Event Pass",
    tagline: "One event, no subscription.",
    price: "$49",
    unit: "/ event",
    sub: "up to 30 players · $89 up to 75 · $149 unlimited",
    cta: "Run one event",
    href: APP_URL,
    points: [
      "Every Pro feature, for one tournament",
      "Remote Control included",
      "Buy it now, use it when the event comes",
      "Four or more events a year? Pro costs less",
    ],
  },
  {
    name: "Pro",
    tagline: "For venues and regular organizers.",
    price: "$349",
    unit: "/ yr",
    sub: "unlimited tournaments · any number of players",
    cta: "Go Pro",
    href: APP_URL,
    featured: true,
    points: [
      "Every feature, every tournament",
      "Remote Control — run the floor from your phone",
      "Your company, venue and splash image on the clock",
      "Dealers, final table and finishing places",
      "Full tournament report with money raised",
      "Corrections, audit trail, locked copies & export",
    ],
  },
];

type Row = { label: string; free: Cell; pass: Cell; pro: Cell };
type Cell = boolean | string;

const compare: { group: string; rows: Row[] }[] = [
  {
    group: "Running tournaments",
    rows: [
      { label: "Live blind timer (levels, breaks, antes)", free: true, pass: true, pro: true },
      { label: "Players", free: "Up to 10", pass: "30 / 75 / unlimited", pro: "Unlimited" },
      { label: "Tournaments", free: "Unlimited", pass: "1 event", pro: "Unlimited" },
      { label: "Rebuys, add-ons and chips in play", free: true, pass: true, pro: true },
      { label: "Winners and payouts", free: true, pass: true, pro: true },
      { label: "Cloud sync across devices", free: true, pass: true, pro: true },
    ],
  },
  {
    group: "On the big screen",
    rows: [
      { label: "Your company and venue name", free: false, pass: true, pro: true },
      { label: "Custom splash image", free: false, pass: true, pro: true },
      { label: "Estimated finish time", free: false, pass: true, pro: true },
      { label: "Total money raised", free: false, pass: true, pro: true },
      { label: "No “Powered by FeltPro” mark on the clock", free: false, pass: true, pro: true },
    ],
  },
  {
    group: "Running the floor",
    rows: [
      { label: "Remote Control from your phone", free: false, pass: true, pro: true },
      { label: "Dealers and staff, with final-table dealer", free: false, pass: true, pro: true },
      { label: "Final table and finishing places", free: false, pass: true, pro: true },
      { label: "Full tournament report", free: false, pass: true, pro: true },
      { label: "Corrections, audit trail, locked copies & export", free: false, pass: true, pro: true },
    ],
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "What is Remote Control?",
    a: "Included with Pro and every Event Pass, it turns your phone into the tournament director's remote. Pause or resume the clock, add time, record rebuys and add-ons, and update player counts from anywhere in the room — with the live level, blinds and countdown right on your phone. It runs in your phone's browser; nothing to install.",
  },
  {
    q: "What is free?",
    a: "Home games of up to 10 players, as many as you like, with the full blind timer, rebuys and add-ons, chips in play, and a winners card at the end. No card needed. The operator features are there to see, with a lock on them.",
  },
  {
    q: "How does the Event Pass work?",
    a: "It is a one-off payment that unlocks every feature for one tournament: $49 for up to 30 players, $89 for up to 75, $149 for any number. Buy it whenever you like and use it when you set the event up. No subscription, nothing renews.",
  },
  {
    q: "Event Pass or Pro?",
    a: "Pro is $349 a year for unlimited tournaments of any size. If you run four or more events a year, Pro costs less than buying passes. It renews yearly and you can cancel the renewal at any time.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. FeltPro runs in your browser on any device — laptop, tablet, or a TV browser. Sign in and you're running.",
  },
  {
    q: "Can I use it commercially (a casino or paid events)?",
    a: "Yes. Pro and the Event Pass are built for venues and revenue-generating events. Need a chain or custom terms? Talk to us.",
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
            <a href="#remote" className="hidden text-white/70 hover:text-white sm:block">
              Remote
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
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            Tournament Poker Timer
          </span>
          <a
            href="#remote"
            className="inline-block rounded-full bg-emerald-500 px-3 py-1 text-xs font-black uppercase tracking-wider text-black transition hover:bg-emerald-400"
          >
            New · Run it from your phone
          </a>
        </div>
        <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl">
          Run a poker tournament <span className="text-emerald-400">that looks pro.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
          FeltPro is the web-based blind timer for home games, charity nights, and
          casino floors. Phone remote control, your name on the clock, cloud
          sync — on any screen, no install.
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

      {/* Remote Control spotlight */}
      <Section id="remote" className="py-16">
        <div className="overflow-hidden rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-emerald-500/[0.08] via-transparent to-transparent">
          <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-emerald-500 px-3 py-1 text-xs font-black uppercase tracking-wider text-black">
                New
              </span>
              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                The clock on the big screen.{" "}
                <span className="text-emerald-400">The controls in your pocket.</span>
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/60">
                FeltPro Remote turns your phone into the tournament
                director&apos;s remote. Pause and resume the clock, add time,
                record rebuys and add-ons, and update player counts — from
                anywhere on the floor, in about a second.
              </p>
              <ul className="mt-7 space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>
                    Live level, blinds and countdown on your phone — with a
                    connection indicator so you know commands will land
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>
                    No app store, nothing to install — add it to your home
                    screen straight from the browser
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>Every action is logged to the tournament record</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>
                    End Tournament is deliberately not on the remote — a stray
                    tap in your pocket can&apos;t end your event
                  </span>
                </li>
              </ul>
              <p className="mt-7 text-sm font-semibold text-emerald-300">
                Included with Pro and every Event Pass
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-[300px] rounded-[2.6rem] border border-white/15 bg-black p-3 shadow-2xl shadow-emerald-500/10">
                <div className="rounded-[2rem] bg-[#0b0b0f] p-4">
                  <div className="mx-auto mb-4 h-1.5 w-24 rounded-full bg-white/15" />
                  <div className="rounded-2xl bg-white/[0.05] p-4 text-center">
                    <p className="text-[10px] uppercase tracking-wider text-white/40">
                      Vanderbilt Poker Tournament
                    </p>
                    <p className="mt-1 text-sm font-extrabold">
                      Level 8 · $1,000 / $2,000
                    </p>
                    <p className="mt-1 text-4xl font-black tabular-nums">12:01</p>
                    <div className="mt-2 flex items-center justify-center gap-2 text-[10px]">
                      <span className="rounded-full bg-emerald-500 px-2 py-0.5 font-bold text-black">
                        RUNNING
                      </span>
                      <span className="text-white/40">8 left</span>
                    </div>
                    <p className="mt-2 flex items-center justify-center gap-1.5 text-[10px] text-white/40">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Laptop connected
                    </p>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs font-extrabold">
                    <div className="rounded-xl bg-amber-500 py-4 text-black">PAUSE</div>
                    <div className="rounded-xl bg-emerald-500 py-4 text-black">RESUME</div>
                    <div className="rounded-xl bg-sky-700 py-4">+1 MIN</div>
                    <div className="rounded-xl bg-sky-700 py-4">+5 MIN</div>
                    <div className="rounded-xl bg-violet-600 py-4">REBUY (4)</div>
                    <div className="rounded-xl bg-violet-600 py-4">ADD-ON (2)</div>
                    <div className="col-span-2 rounded-xl bg-slate-700 py-4">
                      PLAYERS LEFT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            Home games are free. Pay once for a single event, or go Pro and
            run unlimited tournaments. No setup fees.
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
                  <th className="pb-4 text-center font-semibold">Free</th>
                  <th className="pb-4 text-center font-semibold">Event Pass</th>
                  <th className="pb-4 text-center font-semibold text-emerald-300">Pro</th>
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
          <CellTd v={r.free} />
          <CellTd v={r.pass} />
          <CellTd v={r.pro} />
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
