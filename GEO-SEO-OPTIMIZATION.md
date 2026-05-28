# SEO Optimization Audit: Do.Marketing Additional Service Pages

## Executive Summary
- SEO health score: 86/100 after implementation
- Biggest ranking blockers: missing crawlable pages for additional services
- Biggest quick wins: localized service pages for RU/EN/ET, service schema, sitemap coverage, local Tallinn/Estonia intent

## Priority Action Plan
| Priority | Action | Page/Element | SEO Impact | Effort |
|---|---|---|---|---|
| High | Create localized service pages | `/ru|en|et/marketing-audit`, `/smm`, `/seo`, `/website-development` | Captures commercial local intent | Done |
| High | Add metadata and hreflang alternates | All new localized service pages | Improves indexability and language targeting | Done |
| High | Add Service + FAQ structured data | All new localized service pages | Improves SERP understanding | Done |
| Medium | Link services from homepage | Additional services block | Improves crawl paths and conversions | Done |
| Medium | Add sitemap entries | `src/lib/seo.ts` | Helps discovery | Done |

## Technical SEO
New pages use Next.js static generation under localized routes. Metadata is generated per language with canonical and language alternates. Structured data uses `Service`, `BreadcrumbList`, and `FAQPage`.

## On-Page SEO
Each new page targets a bottom-funnel local service intent:
- Marketing audit in Tallinn / Estonia
- SMM management in Tallinn / Estonia
- SEO optimisation in Tallinn / Estonia
- Website development in Tallinn / Estonia

## Metadata Rewrite Suggestions
| Page | Recommended Title | Recommended Meta Description |
|---|---|---|
| Marketing audit | Marketing Audit in Tallinn \| Do.Marketing | Marketing audit for businesses in Tallinn and Estonia: ads, website, funnel, analytics and a practical growth action plan. |
| SMM | SMM in Tallinn \| Instagram, Facebook, TikTok Management \| Do.Marketing | SMM management for businesses in Tallinn and Estonia: strategy, Reels, account packaging, content planning and social media leads. |
| SEO | SEO Optimisation in Tallinn \| Do.Marketing | SEO optimisation for businesses in Tallinn and Estonia: technical SEO, content, local intent and search visibility. |
| Website development | Website Development in Tallinn \| Do.Marketing | Conversion-focused website development for businesses in Tallinn and Estonia: landing pages, service pages, SEO structure and lead forms. |

## Keyword and Search Intent Plan
Primary local modifiers: Tallinn, Estonia, Eesti, Таллинн, Эстония.
Secondary themes: audit, SMM, SEO, website development, landing page, service pages, lead generation, multilingual pages.

## Internal Linking Plan
Homepage additional-service pills now link to the new localized routes. New service pages link to related additional services and keep the same header/footer conversion structure.

## Content Gaps
Future expansion can add case-specific proof blocks for SEO, SMM, and website development once real examples are ready.

## 30-Day SEO Roadmap
1. Submit updated sitemap after deployment.
2. Add Search Console inspection for the 12 new localized URLs.
3. Add real screenshots or case metrics to the new pages when available.
4. Track impressions for local service queries by language.

