import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Or whichever font you are using
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlobizHub Exporters",
  description: "Connecting local quality to global markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {/* The Navbar sits above all page content */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}