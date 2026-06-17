import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
