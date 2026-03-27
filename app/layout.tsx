import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

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
    <html lang="ru" suppressHydrationWarning style={{ backgroundColor: "#0a0a0a" }}>
      <body
        className="bg-[#0a0a0a] text-white antialiased"
        suppressHydrationWarning
        style={{
          backgroundColor: "#0a0a0a",
          color: "#ffffff",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        }}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
