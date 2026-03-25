import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
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
  metadataBase: new URL("https://do.marketing"),
  title: "Do.Marketing | Premium Marketing Agency",
  description:
    "Modern bilingual landing page for Do.Marketing with services, cases, clients, about and contact sections.",
  keywords: [
    "marketing agency",
    "performance marketing",
    "growth strategy",
    "Next.js landing page",
    "Do.Marketing",
  ],
  openGraph: {
    title: "Do.Marketing | Premium Marketing Agency",
    description:
      "Premium bilingual marketing agency landing page in Next.js and Tailwind CSS.",
    siteName: "Do.Marketing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Do.Marketing | Premium Marketing Agency",
    description:
      "Premium bilingual marketing agency landing page in Next.js and Tailwind CSS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
