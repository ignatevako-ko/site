import Link from "next/link";

const foundationWeek = [
  "анализ ниши и конкурентов",
  "определение позиционирования",
  "стратегия контента на 3 месяца",
  "определение рубрик и форматов Reels",
  "составление контент-плана",
];

const packaging = [
  "шапка профиля (позиционирование + оффер)",
  "структура актуальных сторис",
  "оформление обложек актуальных",
  "закрепленные посты (прогрев + экспертность + продажа)",
];

const automation = [
  "подключение ManyChat",
  "базовые автоворонки",
  "автоответы в директ",
  "сбор заявок через сообщения",
];

const monthOneContent = [
  "12 Reels",
  "сценарии",
  "ТЗ на съемку",
  "монтаж",
  "постинг в Instagram, Facebook, TikTok, Shorts",
  "оформление обложек",
];

const monthTwo = [
  "контент-план",
  "написание сценариев",
  "ТЗ на съемку",
  "монтаж видео",
  "оформление обложек",
  "публикация в Instagram, Facebook, TikTok, YouTube Shorts",
  "адаптация контента под каждую платформу",
];

const targeting = [
  "анализ ниши и конкурентов",
  "настройка рекламного кабинета Meta Ads",
  "настройка аудиторий",
  "разработка стратегии рекламной кампании",
  "создание структуры рекламы",
  "написание текстов объявлений",
  "создание креативов или ТЗ на съемку",
  "запуск рекламы",
  "A/B тестирование",
  "оптимизация рекламных кампаний",
];

const process = [
  "создаём стратегию",
  "упаковываем аккаунт",
  "запускаем регулярный контент",
  "масштабируем через блогеров",
  "усиливаем результат рекламой",
];

const pricingRows = [
  { budget: "до 1000€", price: "549€" },
  { budget: "до 2000€", price: "670€" },
  { budget: "от 2000€", price: "890€" },
];

function SectionCard({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.28)] backdrop-blur sm:p-8">
      <div className="space-y-3">
        <h2 className="text-[28px] font-semibold tracking-[-0.04em] text-white sm:text-[34px]">
          {title}
        </h2>
        {description ? (
          <p className="max-w-3xl text-[17px] leading-7 text-slate-300">
            {description}
          </p>
        ) : null}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 rounded-[1.4rem] border border-white/8 bg-slate-950/20 px-4 py-3 text-slate-100"
        >
          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-violet-300/30 bg-violet-300/10 text-xs text-violet-200">
            ✓
          </span>
          <span className="leading-6">{item}</span>
        </div>
      ))}
    </div>
  );
}

export default function SmmPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(167,139,250,0.18),transparent_28%),linear-gradient(180deg,#080714_0%,#0c1020_35%,#0a0f1a_100%)] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 lg:px-10 lg:py-14">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/#services" className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-violet-300/35 hover:text-white">← Назад на главную</Link>
          <Link href="/smm/eng" className="inline-flex items-center rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-sm font-medium text-violet-100 transition hover:bg-violet-300/20">English version</Link>
        </div>

        <section className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03),rgba(15,23,42,0.3))] p-8 shadow-[0_40px_100px_rgba(8,7,20,0.45)] sm:p-10 lg:p-12">
          <div className="max-w-4xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-300">SMM</p>
            <h1 className="text-[40px] font-semibold leading-none tracking-[-0.06em] text-white sm:text-[58px]">Instagram + Facebook + TikTok + YouTube Shorts</h1>
            <p className="max-w-3xl text-[18px] leading-8 text-slate-300 sm:text-[20px]">Система контента, упаковки и масштабирования: сначала строим фундамент, потом ведём аккаунты регулярно и усиливаем результат таргетированной рекламой.</p>
          </div>
        </section>

        <SectionCard title="1 месяц — фундамент и упаковка" description="Цель: создать сильную основу аккаунта, подготовить систему контента и начать рост охватов.">
          <div className="space-y-8">
            <div><h3 className="text-[22px] font-semibold tracking-[-0.03em] text-white">1 неделя — аналитика и стратегия</h3><div className="mt-4"><BulletList items={foundationWeek} /></div></div>
            <div><h3 className="text-[22px] font-semibold tracking-[-0.03em] text-white">Упаковка аккаунта</h3><div className="mt-4"><BulletList items={packaging} /></div></div>
            <div><h3 className="text-[22px] font-semibold tracking-[-0.03em] text-white">Настройка автоматизации</h3><div className="mt-4"><BulletList items={automation} /></div></div>
            <div><h3 className="text-[22px] font-semibold tracking-[-0.03em] text-white">Контент</h3><div className="mt-4"><BulletList items={monthOneContent} /></div></div>
            <div className="rounded-[1.6rem] border border-violet-300/18 bg-violet-300/10 px-5 py-4 text-[18px] font-medium text-violet-50 sm:text-[20px]">Оформление Instagram, Facebook, TikTok, YouTube</div>
            <div className="rounded-full border border-white/10 bg-white/6 px-6 py-4 text-[22px] font-semibold tracking-[-0.04em] text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)]">💰 Стоимость 1 месяца: 1390 €</div>
          </div>
        </SectionCard>

        <SectionCard title="Со 2 месяца — регулярное ведение" description="Цель: системный рост охватов, доверия и заявок через короткие видео.">
          <div className="space-y-8">
            <div className="rounded-[1.6rem] border border-white/8 bg-slate-950/20 p-5 text-[20px] font-semibold text-white">20 Reels в месяц</div>
            <div><h3 className="text-[22px] font-semibold tracking-[-0.03em] text-white">Что входит</h3><div className="mt-4"><BulletList items={monthTwo} /></div></div>
            <div className="rounded-full border border-white/10 bg-white/6 px-6 py-4 text-[22px] font-semibold tracking-[-0.04em] text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)]">💰 Стоимость ведения: 750 € / месяц</div>
            <div className="rounded-[1.6rem] border border-white/8 bg-slate-950/20 p-5 text-[18px] leading-7 text-slate-200"><p>С 3-го месяца: 12 Reels в месяц + 8 дней сторис.</p></div>
          </div>
        </SectionCard>

        <SectionCard title="С 3 месяца — подключение таргетированной рекламы" description="Цель: масштабировать охваты, привлекать подписчиков и получать заявки.">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_22rem] xl:items-start">
            <div><h3 className="text-[22px] font-semibold tracking-[-0.03em] text-white">Что входит в таргетинг</h3><div className="mt-4"><BulletList items={targeting} /></div></div>
            <div className="xl:mt-[3.25rem] rounded-[1.9rem] border border-violet-300/18 bg-[linear-gradient(155deg,rgba(167,139,250,0.18),rgba(255,255,255,0.04),rgba(15,23,42,0.35))] p-5 shadow-[0_24px_70px_rgba(76,29,149,0.18)] sm:p-6">
              <div className="flex min-h-full flex-col items-center text-center">
                <p className="mt-0 text-[48px] font-light tracking-[-0.08em] text-white sm:text-[58px]">549€</p>
                <div className="mt-5 inline-flex items-center justify-center rounded-full border border-violet-300/22 bg-violet-300/10 px-3.5 py-1 text-[13px] font-medium text-violet-100 shadow-[0_12px_40px_rgba(167,139,250,0.12)]">+ рекламный бюджет: от 350€</div>
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
        </SectionCard>

        <SectionCard title="Как выглядит процесс работы">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => (
              <div key={step} className="rounded-[1.6rem] border border-white/8 bg-slate-950/24 p-5 text-slate-100">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-4 text-[18px] leading-7">{step}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </main>
  );
}
