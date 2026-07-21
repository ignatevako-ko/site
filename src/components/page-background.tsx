/**
 * Единый декоративный фон страницы (блоб-градиенты + сетка).
 * Используется поверх `bg-slate-950`. Совпадает с фоном лендинга и сервисных
 * страниц, чтобы все разделы сайта смотрелись как одна система.
 */
export function PageBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-[-6rem] top-[-3rem] h-[20rem] w-[20rem] rounded-full bg-amber-200/16 blur-3xl" />
      <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-violet-400/12 blur-3xl" />
      <div className="absolute right-[-9rem] top-32 h-[26rem] w-[26rem] rounded-full bg-fuchsia-200/12 blur-3xl" />
      <div className="absolute bottom-[-10rem] left-[-6rem] h-[24rem] w-[24rem] rounded-full bg-violet-200/10 blur-3xl" />
      <div className="grid-overlay absolute inset-0 opacity-40" />
    </div>
  );
}
