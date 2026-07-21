import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Единый «eyebrow» (надзаголовок секции) для всего сайта.
 * Токен зафиксирован в DESIGN.md — не переопределять размер/tracking локально.
 */
export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-[13px] font-semibold uppercase tracking-[0.28em] text-violet-300 ${className}`}
    >
      {children}
    </p>
  );
}
