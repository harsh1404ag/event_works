import type { Metadata } from 'next';
import Script from 'next/script'; // Import added
import ThemeRegistry from '../components/ThemeRegistry';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Event Works | Best Event Management & Catering in Punjab',
  description: 'Event Works provides luxury wedding planning, corporate event management, and the best catering services in Jalandhar, Ludhiana, Phagwara, Punjab. 5000+ events since 2004. Turn your events into memories.',
  keywords: 'Event Management Jalandhar, Best Catering Service Jalandhar, Event Management Ludhiana, Best Catering Service Ludhiana, Event Management Phagwara, Best Catering Service Phagwara, Wedding Planner Punjab, Luxury Events, Corporate Event Management Punjab, Birthday Party Planner, Wedding Decoration, Photography Services, DJ Services',
  openGraph: {
    title: 'Event Works - Luxury Event Management in Punjab',
    description: 'Premier event planning and catering in Jalandhar, Ludhiana, Phagwara. 5000+ successful events since 2004.',
    images: ['/images/hero_image.jpeg'],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preload" href="/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Lora-Italic-VariableFont_wght.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EventPlanner",
              "name": "Event Works",
              "image": "https://eventworks-f75d8.web.app/images/event_works_logo.png",
              "telephone": "+91-9056220903",
              "email": "harsh@eventworks.in",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Phagwara",
                "addressRegion": "Punjab",
                "postalCode": "144401",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 31.2247,
                "longitude": 75.7730
              },
              "priceRange": "$$$",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Jalandhar"
                },
                {
                  "@type": "City",
                  "name": "Ludhiana"
                },
                {
                  "@type": "City",
                  "name": "Phagwara"
                }
              ],
              "description": "Top-rated event management and catering company in Punjab. Specializing in weddings, corporate events, and luxury celebrations since 2004.",
              "foundingDate": "2004",
              "slogan": "Setting the Standard for Events in Punjab & Beyond Since 2004",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "5000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Event Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Event Planning"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Catering Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Event Decoration"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "DJ & Entertainment"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Corporate Event Management"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body style={{ overflowX: 'hidden' }}>
        {/* GOOGLE ANALYTICS INTEGRATION */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1CHE72024J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1CHE72024J');
          `}
        </Script>
        <ThemeRegistry>
          <Navigation />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
