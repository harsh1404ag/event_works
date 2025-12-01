import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeRegistry from '@/components/ThemeRegistry';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Event Works | Best Event Management & Catering in Jalandhar, Ludhiana, Phagwara',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EventPlanner",
              "name": "Event Works",
              "image": "https://eventworks-f75d8.web.app/images/event_works_logo.png",
              "telephone": "+91-9465638069",
              "email": "support@eventworks.in",
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
              "description": "Top-rated event management and catering company in Jalandhar, Ludhiana, and Phagwara. Specializing in weddings, corporate events, and luxury celebrations since 2004.",
              "foundingDate": "2004",
              "slogan": "Crafting Your Vision Since 2004",
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
                      "name": "Wedding Planning"
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
                      "name": "Photography Services"
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
      <body className={inter.className} style={{ overflowX: 'hidden' }}>
        <ThemeRegistry>
          <Navigation />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}