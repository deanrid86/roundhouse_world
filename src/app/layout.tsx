import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/app/ui/navbar"; // Adjust the path as necessary to match your folder structure

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Roundhouse World",
  description: "Kickboxing tips, gear reviews, and training insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Always show the Header */}
        <Header />
        {/* Render the page content */}
        {children}
      </body>
    </html>
  );
}
