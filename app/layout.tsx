import type { Metadata } from "next";
import { Geist, Geist_Mono, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  variable: '--font-bodoni-moda',
  subsets: ['latin']
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MR International - A Spirit of Enterprise. An Obsession for Quality",
  description: "A Spirit of Enterprise. An Obsession for Quality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodoniModa.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
