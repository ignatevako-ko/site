import Link from "next/link";

const pricingRows = [
  { budget: "up to 1000€", price: "549€" },
  { budget: "up to 2000€", price: "670€" },
  { budget: "from 2000€", price: "890€" },
];

const targeting = [
  "niche and competitor analysis",
  "Meta Ads account setup",
  "audience setup",
  "campaign strategy development",
  "ad structure creation",
  "ad copywriting",
  "creative production or filming brief",
  "campaign launch",
  "A/B testing",
  "campaign optimization",
];

export default function SmmEnglishPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(167,139,250,0.18),transparent_28%),linear-gradient(180deg,#080714_0%,#0c1020_35%,#0a0f1a_100%)] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 lg:px-10 lg:py-14">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/smm" className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-violet-300/35 hover:text-white">← Back to SMM</Link>
          <Link href="/#services" className="inline-flex items-center rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-sm font-medium text-violet-100 transition hover:bg-violet-300/20">Main page</Link>
        </div>

        <section className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03),rgba(15,23,42,0.3))] p-8 shadow-[0_40px_100px_rgba(8,7,20,0.45)] sm:p-10 lg:p-12">
          <div className="max-w-4xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-300">SMM</p>
            <h1 className="text-[40px] font-semibold leading-none tracking-[-0.06em] text-white sm:text-[58px]">Instagram + Facebook + TikTok + YouTube Shorts</h1>
            <p className="max-w-3xl text-[18px] leading-8 text-slate-300 sm:text-[20px]">A content, packaging and scaling system: first we build the foundation, then we manage the accounts consistently and strengthen the result with paid advertising.</p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.28)] backdrop-blur sm:p-8">
          <h2 className="text-[28px] font-semibold tracking-[-0.04em] text-white sm:text-[34px]">From month 3 — targeted advertising</h2>
          <p className="mt-3 max-w-3xl text-[17px] leading-7 text-slate-300">Goal: scale reach, attract followers and generate leads.</p>
          <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_22rem] xl:items-start">
            <div className="grid gap-3 sm:grid-cols-2">
              {targeting.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[1.4rem] border border-white/8 bg-slate-950/20 px-4 py-3 text-slate-100">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-violet-300/30 bg-violet-300/10 text-xs text-violet-200">✓</span>
                  <span className="leading-6">{item}</span>
                </div>
              ))}
            </div>

            <div className="rounded-[1.9rem] border border-violet-300/18 bg-[linear-gradient(155deg,rgba(167,139,250,0.18),rgba(255,255,255,0.04),rgba(15,23,42,0.35))] p-5 shadow-[0_24px_70px_rgba(76,29,149,0.18)] sm:p-6">
              <div className="flex min-h-full flex-col items-center text-center">
                <p className="mt-0 text-[48px] font-light tracking-[-0.08em] text-white sm:text-[58px]">549€</p>
                <div className="mt-5 inline-flex items-center justify-center rounded-full border border-violet-300/22 bg-violet-300/10 px-3.5 py-1 text-[13px] font-medium text-violet-100 shadow-[0_12px_40px_rgba(167,139,250,0.12)]">+ ad budget: from 350€</div>
                <div className="mt-5 w-full max-w-[19rem] rounded-[1.2rem] border border-white/8 bg-slate-950/22 px-4 py-3 text-left">
                  <div className="space-y-2">
                    {pricingRows.map((row) => (
                      <div key={`${row.budget}-${row.price}`} className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-white/8 pb-2 text-[14px] text-slate-200 last:border-b-0 last:pb-0">
                        <span>{row.budget}</span>
                        <span className="font-semibold text-white">{row.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
