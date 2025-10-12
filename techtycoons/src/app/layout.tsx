import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Tycoons",
  description: "Technical Club of Department of IT, MECS",
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        rel: 'icon',
        url: "/Images/favicon_TT/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        rel: 'icon',
        url: "/Images/favicon_TT/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: 'icon',
        url: "/Images/favicon_TT/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      }
    ],
    shortcut: [
      {
        rel: 'shortcut icon',
        url: "/Images/favicon_TT/favicon.ico",
        type: "image/x-icon",
      }
    ],
    apple: {
      rel: 'apple-touch-icon',
      url: "/Images/favicon_TT/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    }
  },
}; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0b0d23" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${rajdhani.variable} antialiased`} suppressHydrationWarning>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
