import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { getSite } from "@/lib/data";
import { darkTheme } from "@/styles/theme.css";
import * as layoutStyles from "@/styles/layout.css";
import "@/styles/global.css";

import "./globals.css";

const site = getSite();

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: site.meta.title,
    template: `%s · ${site.meta.title}`,
  },
  description: site.meta.description,
  keywords: site.meta.keywords,
  authors: [{ name: site.meta.author }],
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.meta.title,
    description: site.meta.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={darkTheme} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className={layoutStyles.bodyColumn}>
        <ThemeProvider>
          <Header siteTitle={site.meta.title} nav={site.nav} />
          <main className={layoutStyles.main}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
