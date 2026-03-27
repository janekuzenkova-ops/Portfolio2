import type { Metadata } from "next";
import { Suspense } from "react";
import { Koulen } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";

const koulen = Koulen({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-koulen",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Кузенкова Евгения | Product Designer",
  description:
    "Делаю сложные продукты простыми. Product Designer с 6-летним опытом в fintech, crypto, b2c, b2b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={koulen.variable} style={{ backgroundColor: "#111111" }}>
      <body
        className="bg-[#111111] text-white antialiased"
        style={{
          backgroundColor: "#111111",
          color: "#ffffff",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        }}
      >
        <SmoothScroll />
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
