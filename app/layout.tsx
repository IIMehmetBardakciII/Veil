import type { Metadata } from "next";
import "./globals.css";
import SvgNoise from "@/components/SvgNoise";



export const metadata: Metadata = {
  title: "Veil Aurum Parfums",
  description: "Veil Aurum Parfums",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <SvgNoise />
        {children}
      </body>
    </html>
  );
}
