import type { Metadata } from "next";
import { Roboto_Mono, Fira_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const menoDisplay = localFont({
  src: "../public/fonts/fonnts.com-Meno-Display-Extra-Cond.otf",
  variable: "--font-meno-display",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "WWAC 26",
  description: "Slapbixel Exploration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${robotoMono.variable} ${firaMono.variable} ${menoDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
