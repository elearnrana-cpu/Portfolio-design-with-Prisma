import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Enamul Hasan Rana | Web Developer",
    template: "%s | Enamul Hasan Rana"
  },
  description:
    "Portfolio of Enamul Hasan Rana, a Dhaka-based web developer, app developer, digital marketer, and AI automation learner.",
  openGraph: {
    title: "Enamul Hasan Rana | Web Developer",
    description:
      "Modern web, app, marketing, and AI automation work by Enamul Hasan Rana in Dhaka, Bangladesh.",
    url: siteUrl,
    siteName: "Enamul Hasan Rana Portfolio",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Enamul Hasan Rana portfolio preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    creator: "@elearnrana",
    title: "Enamul Hasan Rana | Web Developer",
    description: "Web developer, app developer, digital marketer, and AI automation learner.",
    images: ["/og"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
