type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <div className={`flex items-center ${compact ? "gap-2.5 sm:gap-3" : "gap-3 sm:gap-4"}`}>
      <div
        className={`relative shrink-0 ${
          compact ? "h-10 w-10 sm:h-11 sm:w-11" : "h-12 w-12 sm:h-14 sm:w-14"
        }`}
      >
        <div className="absolute inset-[4px] rotate-[8deg] rounded-xl bg-white/22 shadow-[0_10px_24px_rgba(255,255,255,0.08)]" />
        <div className="absolute inset-0 rounded-xl border border-white/10 bg-white text-slate-950 shadow-[0_6px_24px_rgba(255,255,255,0.12)]" />
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[48%] rotate-45 border-r-[3px] border-t-[3px] border-slate-900 ${
            compact ? "h-3.5 w-3.5 sm:h-4 sm:w-4" : "h-4 w-4 sm:h-5 sm:w-5"
          }`}
        />
      </div>

      <div className="leading-none">
        <div
          className={`font-display font-light tracking-[-0.04em] text-white ${
            compact ? "text-[1.45rem] sm:text-[1.7rem]" : "text-[1.95rem] sm:text-[2.2rem]"
          }`}
        >
          Do
        </div>
        <div
          className={`font-display mt-1 font-light tracking-[-0.04em] text-white ${
            compact ? "text-[1.45rem] sm:text-[1.7rem]" : "text-[1.95rem] sm:text-[2.2rem]"
          }`}
        >
          Marketing
        </div>
      </div>
    </div>
  );
}
