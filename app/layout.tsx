import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Pixonal - Intelligent Data Solutions & Strategic Advisory",
    template: "%s | Pixonal"
  },
  description: "Empowering organizations with intelligent data solutions and strategic advisory services. Transform your operations with our Llumen platform across mobility, real estate, citizen services, and more.",
  keywords: [
    "data analytics",
    "intelligent solutions",
    "strategic advisory",
    "digital transformation",
    "Llumen platform",
    "mobility solutions",
    "real estate analytics",
    "citizen services",
    "technology infrastructure",
    "military defense",
    "law enforcement"
  ],
  authors: [{ name: "Pixonal" }],
  creator: "Pixonal",
  publisher: "Pixonal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pixonal.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pixonal.com",
    title: "Pixonal - Intelligent Data Solutions & Strategic Advisory",
    description: "Empowering organizations with intelligent data solutions and strategic advisory services.",
    siteName: "Pixonal",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pixonal - Intelligent Data Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixonal - Intelligent Data Solutions & Strategic Advisory",
    description: "Empowering organizations with intelligent data solutions and strategic advisory services.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  );
}