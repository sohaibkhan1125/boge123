import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Content Generator",
  description: "AI content generators tools for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <meta name="google-adsense-account" content="ca-pub-7692733251094072"/>
        <Head>
         
        <Script
  strategy="lazyOnload"
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
/>

<Script id="ga-script" strategy="lazyOnload">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
    });
        `}
</Script>
          {/* Google AdSense */}
          <script 
            async 
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7692733251094072"
            crossOrigin="anonymous">
          </script>
        </Head>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
