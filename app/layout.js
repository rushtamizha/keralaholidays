import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  icons: {
    icon: '/aventura-logo.png', // Points to public/favicon.ico
    shortcut: '/aventura-logo.png',
    apple: '/aventura-logo.png',
  },
  metadataBase: new URL('https://aventurakeralaholidays.com/'),
  title: {
    default: "Aventura Kerala Holidays | Best Kerala Tour Packages 2026",
    template: "%s | Aventura Kerala Holidays",
  },
  description: "Experience premium Kerala tour packages with Aventura. From Munnar tea gardens to Alleppey houseboats, book your authentic Kerala holiday today.",
  keywords: ["Kerala tour packages", "Munnar resort booking", "Kerala honeymoon packages", "Alleppey houseboats", "Aventura Kerala"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Aventura Kerala Holidays | Authentic Kerala Experiences",
    description: "Discover God's Own Country with premium hand-picked resorts and customized itineraries.",
    url: "https://aventurakeralaholidays.com/",
    siteName: "Aventura Kerala Holidays",
    images: [{ url: "/packages/alleppey-backwater-tour.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aventura Kerala Holidays",
    description: "Book your dream Kerala vacation with local experts.",
    images: ["/packages/alleppey-backwater-tour.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  // JSON-LD Structured Data for Local Business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Aventura Kerala Holidays",
    "image": "https://www.aventurakerala.com/packages/alleppey-backwater-tour.jpg",
    "url": "https://aventurakeralaholidays.com/",
    "telephone": "+918281674180",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Munnar",
      "addressLocality": "Munnar",
      "addressRegion": "TN",
      "postalCode": "685612",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "areaServed": "Kerala",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.0104,
      "longitude": 77.4768
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-emerald-100 selection:text-emerald-900`}>
        {children}
        <WhatsAppButton/>
      </body>
    </html>
  );
}
