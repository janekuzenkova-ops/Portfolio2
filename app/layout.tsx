import type { Metadata } from "next";
import { Koulen } from "next/font/google";
import "./globals.css";

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
    <html lang="ru" className={koulen.variable}>
      <body
        className="bg-[#111111] text-white antialiased"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
