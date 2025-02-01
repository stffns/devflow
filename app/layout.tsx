import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import {ThemeProvider} from "next-themes";
import Navbar from "@/components/navigation/navbar";

const inter = localFont({
    src: "/fonts/interVF.ttf",
    variable: "--font-inter",
    weight: "100 200 300 400 500 700 800 900",
});

const spaceGrotesk = localFont({
    src: "/fonts/SpaceGroteskVF.ttf",
    variable: "--font-space-grotesk",
    weight: "300 400 500 700",
});

export const metadata: Metadata = {
    title: "DevFlow",
    description: "A great place to learn and grow",
    icons: {
        icon:'/images/site-logo.svg',
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          {children}

      </ThemeProvider>

      </body>
    </html>
  );
}
