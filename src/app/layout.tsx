import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://domarketing.ee"),
  title: {
    default: "Do.Marketing | Реклама Meta Ads и Google Ads в Tallinn, Estonia",
    template: "%s",
  },
  description:
    "Do.Marketing помогает бизнесу в Таллинне и по всей Эстонии привлекать клиентов через Meta Ads и Google Ads: стратегия, запуск, ведение, креативы и рост заявок.",
  keywords: [
    "Meta Ads Tallinn",
    "Google Ads Tallinn",
    "marketing agency Tallinn",
    "performance marketing Estonia",
    "Facebook Ads Estonia",
    "Instagram Ads Tallinn",
    "Do.Marketing",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Do.Marketing | Реклама Meta Ads и Google Ads в Tallinn, Estonia",
    description:
      "Локальное performance marketing агентство в Таллинне: Meta Ads, Google Ads, кейсы, креативы и реклама с фокусом на заявки и окупаемость.",
    siteName: "Do.Marketing",
    type: "website",
    url: "https://domarketing.ee",
    locale: "ru_EE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Do.Marketing | Реклама Meta Ads и Google Ads в Tallinn, Estonia",
    description:
      "Meta Ads и Google Ads для бизнеса в Таллинне и Эстонии: стратегия, запуск и ведение рекламы под реальные заявки.",
  },
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://domarketing.ee/#organization",
      name: "Do.Marketing",
      legalName: "OÜ Turundusagendid",
      url: "https://domarketing.ee",
      email: "ceo@domarketing.ee",
      telephone: "+37257843293",
      foundingLocation: "Tallinn, Estonia",
      areaServed: ["Tallinn", "Estonia"],
      sameAs: [
        "https://www.instagram.com/do.market.ng/",
        "https://t.me/ignateva_ko",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://domarketing.ee/#localbusiness",
      name: "Do.Marketing",
      url: "https://domarketing.ee",
      image: "https://domarketing.ee/brand/logo-white.png",
      email: "ceo@domarketing.ee",
      telephone: "+37257843293",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tallinn",
        addressCountry: "EE",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Tallinn",
        },
        {
          "@type": "Country",
          name: "Estonia",
        },
      ],
      priceRange: "€€",
      knowsAbout: [
        "Meta Ads",
        "Facebook Ads",
        "Instagram Ads",
        "Google Ads",
        "Performance marketing",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WTDNM4G8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <ScrollToTopButton />
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WTDNM4G8');`}
        </Script>
        <Script
          id="google-analytics-src"
          src="https://www.googletagmanager.com/gtag/js?id=G-XV65NR9MDQ"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XV65NR9MDQ');`}
        </Script>
        <Script
          id="organization-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(organizationStructuredData)}
        </Script>
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1694089068679902');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1694089068679902&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
