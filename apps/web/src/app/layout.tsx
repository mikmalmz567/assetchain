import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "AssetChain — RWA Platform untuk UMKM Indonesia",
  description:
    "Tokenisasi aset nyata UMKM Indonesia. Akses modal lebih mudah, investasi lebih transparan, powered by blockchain.",
  keywords: ["RWA", "UMKM", "tokenization", "blockchain", "Indonesia", "investasi"],
  openGraph: {
    title: "AssetChain — RWA Platform untuk UMKM Indonesia",
    description: "Tokenisasi aset nyata UMKM Indonesia melalui blockchain.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
