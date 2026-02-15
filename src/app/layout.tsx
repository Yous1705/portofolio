import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Container } from "@/components/container";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Yous Sibarani - Software Engineer",
  description: "Full Stack Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <footer className="border-t border-white/10">
          <Container>
            © {new Date().getFullYear()} Yous Sibarani. Built with Next.js.
          </Container>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
