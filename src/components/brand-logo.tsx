import Image from "next/image";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <Image
      src="/brand/logo-white-site-cropped.png"
      alt="Do.Marketing"
      width={compact ? 165 : 220}
      height={compact ? 55 : 74}
      priority={compact}
      className={`block w-auto ${
        compact ? "h-12 sm:h-[3.375rem]" : "h-16 sm:h-20"
      }`}
      sizes={compact ? "165px" : "220px"}
    />
  );
}
