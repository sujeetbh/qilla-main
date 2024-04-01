import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'
import { Toaster } from "@/components/ui/sonner";

import { config } from '@/config'
import { ContextProvider } from '@/context'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qilla",
  description: "A security provider for all the nft around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ContextProvider initialState={initialState}>
              <Navbar />
              {children}
              <Toaster />
            </ContextProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
