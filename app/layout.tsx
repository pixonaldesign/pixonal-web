import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import SiteHeader from "@/components/navigation/SiteHeader";

export const metadata: Metadata = {
  title: {
    default: "Pixonal - Intelligent Data Solutions",
    template: "%s | Pixonal",
  },
  description:
    "Empowering organizations with intelligent data solutions. Transform your operations with our Llumen platform across mobility, real estate, citizen services, and more.",
  keywords: [
    "data analytics",
    "intelligent solutions",
    "digital twin",
    "digital transformation",
    "Llumen platform",
    "mobility solutions",
    "real estate analytics",
    "citizen services",
    "technology infrastructure",
    "military defense",
    "law enforcement",
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
    title: "Pixonal - Intelligent Data Solutions",
    description:
      "Empowering organizations with intelligent data solutions.",
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
    title: "Pixonal - Intelligent Data Solutions",
    description:
      "Empowering organizations with intelligent data solutions.",
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
    <html lang="en">
      <body className="font-sans antialiased bg-[var(--background)]">
        <SmoothScrollProvider>
          <div className="w-full min-h-screen flex flex-col justify-start items-center relative">
          <div className="w-full flex flex-col justify-start items-center rounded-card">
            <SiteHeader>
              <Navigation />
            </SiteHeader>

            {/* Page Content */}
            <main className="relative z-0 w-full overflow-visible">{children}</main>

            {/* Footer */}
            <Footer />
          </div>
        </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
