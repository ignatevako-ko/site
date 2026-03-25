import Image from "next/image";

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

export function BrandLogo({ compact = false, className = "" }: BrandLogoProps) {
  const wrapperClass = compact ? "h-14 sm:h-16" : "h-24 sm:h-28";
  const logoWidth = compact ? 520 : 760;
  const logoHeight = compact ? 160 : 220;

  return (
    <div className={`relative ${wrapperClass} ${className}`.trim()}>
      <Image
        src="/brand/logo-white.png"
        alt="Do.Marketing"
        width={logoWidth}
        height={logoHeight}
        priority
        className="h-full w-auto max-w-none object-contain"
      />
    </div>
  );
}
