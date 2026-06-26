import Image from "next/image";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <Image
      src="/brand/logo-white-site.png"
      alt="Do.Marketing"
      width={compact ? 220 : 220}
      height={compact ? 77 : 100}
      priority={compact}
      className={`block w-auto ${
        compact ? "h-16 sm:h-[4.5rem]" : "h-16 sm:h-20"
      }`}
      sizes={compact ? "220px" : "220px"}
    />
  );
}
