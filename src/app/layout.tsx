import type { Metadata } from "next";
import "./globals.css";
import Navbar from '@/components/Navbar'
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";

import {ClerkProvider} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "Blogsolution: Abhishek Gupta @softengabhishek",
  description: "Your updated tech guide is here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <Navbar />
            <div className="md:px-10">
            {children}
            </div>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
