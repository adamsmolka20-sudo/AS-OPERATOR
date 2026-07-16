import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AS Operator — I Build the System. You Get Paid For Your Audience.",
  description:
    "I help influencers and creators go from unmonetised following to a real revenue system — built and launched for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
