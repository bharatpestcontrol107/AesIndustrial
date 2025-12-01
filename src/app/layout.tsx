import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AES Industrial Pvt. Ltd. | Industrial Solutions Since 1998",
  description: "AES Industrial Pvt. Ltd. is a leading industrial products supplier in Pune, providing lifting equipment, material handling solutions, bearing management tools, and special tools to heavy industries across India since 1998.",
  keywords: "industrial equipment, lifting equipment, material handling, bearing tools, hand tools, Pune, India, Hyster, Ega Master, Tractel",
  openGraph: {
    title: "AES Industrial Pvt. Ltd.",
    description: "Your Specialist Partner for Industrial Solutions",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
