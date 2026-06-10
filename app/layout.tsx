import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Pixonal - Intelligent Data Solutions & Strategic Advisory",
    template: "%s | Pixonal",
  },
  description:
    "Empowering organizations with intelligent data solutions and strategic advisory services. Transform your operations with our Llumen platform across mobility, real estate, citizen services, and more.",
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
    title: "Pixonal - Intelligent Data Solutions & Strategic Advisory",
    description:
      "Empowering organizations with intelligent data solutions and strategic advisory services.",
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
    description:
      "Empowering organizations with intelligent data solutions and strategic advisory services.",
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
      <body className="font-sans antialiased bg-zinc-900">
        <div className="w-full min-h-screen flex flex-col justify-start items-center relative">
          <div className="w-full flex flex-col justify-start items-center gap-section rounded-card">
            <header className="flex justify-center fixed top-5 left-5 right-5 z-50 w-[calc(100%-2.5rem)]">
              <Navigation />
            </header>

            {/* Page Content */}
            <main className="w-full">{children}</main>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
