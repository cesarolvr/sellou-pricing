import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sellou - Pricing",
  description:
    "A marketplace done with care. Sellou provides a refined, user-friendly platform for buyers and sellers to connect, featuring direct communication and a curated selection of unique, elegant products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-[100svh] overflow-hidden">
      <body
        className={`${poppins.className} h-full`}
      >
        {children}
      </body>
    </html>
  );
}
