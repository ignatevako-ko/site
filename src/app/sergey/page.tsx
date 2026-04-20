import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sergey",
  description: "Embedded copy of the Ulemiste Pesula English landing page.",
  robots: {
    index: false,
    follow: false,
  },
};

const sourceUrl = "https://ulemistepesula.ee/en/";

export default function SergeyPage() {
  return (
    <main className="min-h-screen bg-white">
      <iframe
        title="Ulemiste Pesula English page"
        src={sourceUrl}
        className="block h-screen w-full border-0"
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <noscript>
        <p style={{ padding: "1rem", color: "#111827" }}>
          Open{" "}
          <a href={sourceUrl} style={{ textDecoration: "underline" }}>
            {sourceUrl}
          </a>
          .
        </p>
      </noscript>
    </main>
  );
}
