import type { Metadata } from "next";
import { switzer, oggDisplay, oggText } from "@/lib/fonts";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "VAULT",
  description: "The Digital Atelier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${switzer.variable} ${oggDisplay.variable} ${oggText.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
