import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

const siteUrl = "https://yous1705.github.io/portofolio/";
const name = "Yous Sibarani";
const title = `${name} — Software Engineer`;
const description =
  "Software Engineer/ Junior Full Stack / Backend-oriented Software Engineer. TypeScript, Next.js, NestJS, PostgreSQL, Prisma.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${name}`,
  },
  description,
  applicationName: title,
  authors: [{ name }],
  creator: name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: name,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${name} portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/60">
            © {new Date().getFullYear()} {name}. Built with Next.js.
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
