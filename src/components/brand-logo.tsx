type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <div
      className={`flex items-center ${
        compact ? "gap-3 sm:gap-3.5" : "gap-4 sm:gap-5"
      }`}
    >
      <div
        className={`relative shrink-0 ${
          compact ? "h-12 w-12 sm:h-[3.25rem] sm:w-[3.25rem]" : "h-16 w-16 sm:h-20 sm:w-20"
        }`}
      >
        <div className="absolute inset-[3px] rotate-[9deg] rounded-[1.4rem] bg-white/38 shadow-[0_16px_32px_rgba(255,255,255,0.07)]" />
        <div className="absolute inset-0 rounded-[1.4rem] border border-[#d9d9d9] bg-white shadow-[0_8px_26px_rgba(255,255,255,0.1)]" />
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[42%] rotate-45 border-r-[4px] border-t-[4px] border-black ${
            compact ? "h-4.5 w-4.5 sm:h-5 sm:w-5" : "h-6 w-6 sm:h-7 sm:w-7"
          }`}
        />
      </div>

      <div className="leading-none">
        <div
          className={`font-display font-extralight tracking-[-0.05em] text-white ${
            compact ? "text-[1.6rem] sm:text-[1.8rem]" : "text-[2.35rem] sm:text-[2.9rem]"
          }`}
        >
          Do
        </div>
        <div
          className={`font-display mt-1 font-extralight tracking-[-0.05em] text-white ${
            compact ? "text-[1.6rem] sm:text-[1.8rem]" : "text-[2.35rem] sm:text-[2.9rem]"
          }`}
        >
          Marketing
        </div>
      </div>
    </div>
  );
}
