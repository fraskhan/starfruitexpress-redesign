import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Starfruit Express — Farm Fresh, Delivered Fast",
  description:
    "Get farm-fresh, locally sourced produce delivered to your door in under 45 minutes. Join 18,000+ customers across the city.",
  keywords: [
    "fresh produce",
    "grocery delivery",
    "farm to door",
    "organic vegetables",
    "fruit delivery",
  ],
  openGraph: {
    title: "Starfruit Express — Farm Fresh, Delivered Fast",
    description:
      "Get farm-fresh, locally sourced produce delivered to your door in under 45 minutes.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
