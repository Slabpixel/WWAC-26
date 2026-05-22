import type { Metadata } from "next";
import { Roboto_Mono, Fira_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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
  src: "../public/fonts/fonnts.com-Meno-Display-Extra-Cond-Semi-Bold.otf",
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
      className={cn(
        "dark",
        "h-full",
        "antialiased",
        robotoMono.variable,
        firaMono.variable,
        menoDisplay.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
