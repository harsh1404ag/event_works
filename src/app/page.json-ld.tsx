export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Event Works',
    image: 'https://eventworks.in/images/event_works_logo.png',
    '@id': 'https://eventworks.in',
    url: 'https://eventworks.in',
    telephone: '+91-9465638069',
    email: 'support@eventworks.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Phagwara',
      addressLocality: 'Phagwara',
      addressRegion: 'Punjab',
      postalCode: '144401',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.2247,
      longitude: 75.7730,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '20:00',
    },
    sameAs: [
      'https://facebook.com/eventworks',
      'https://instagram.com/eventworks',
      'https://linkedin.com/company/eventworks',
    ],
    priceRange: '₹₹₹',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Ludhiana',
      },
      {
        '@type': 'City',
        name: 'Phagwara',
      },
      {
        '@type': 'City',
        name: 'Jalandhar',
      },
    ],
    description: 'Best event management company in Punjab since 2004. Expert wedding planning, catering, decoration, photography, DJ services in Ludhiana, Phagwara, Jalandhar.',
    foundingDate: '2004',
    slogan: 'Crafting Your Vision Since 2004',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
