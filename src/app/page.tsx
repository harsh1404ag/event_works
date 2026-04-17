'use client';

import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import Script from 'next/script';

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Event Works',
    description: 'Best event management company in Punjab since 2004. Expert wedding planning, catering, decoration, DJ services in Punjab',
    telephone: '+91-9056220903',
    email: 'harsh@eventworks.in',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Phagwara',
      addressRegion: 'Punjab',
      addressCountry: 'IN',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
    },
    areaServed: ['Punjab'],
  };

  return (
    <Box>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <FeaturesSection />
      
      {/* CTA Section */}
      <Box sx={{ py: 8, bgcolor: '#000', color: 'white' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography 
              variant="h2" 
              align="center" 
              gutterBottom
              sx={{ fontFamily: 'Playfair Italic', textTransform: 'uppercase', color: 'white' }}
            >
              Ready to Plan Your Dream Event?
            </Typography>
            <Typography variant="h6" align="center" sx={{ mb: 4, opacity: 0.9 }}>
              Start building your perfect event package in just 5 minutes
            </Typography>
            <Box display="flex" justifyContent="center">
              <Link href="/contact" passHref>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#D4AF37',
                    color: '#000',
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    fontFamily: 'Lora Italic',
                    '&:hover': {
                      bgcolor: '#B8941F',
                    },
                  }}
                >
                  Start Planning Now
                </Button>
              </Link>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Trust Indicators */}
      <Box sx={{ py: 6, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={6} md={3}>
              <Box textAlign="center">
                <Typography variant="h3" color="primary.main" fontWeight="bold" sx={{ fontFamily: 'Playfair Italic' }}>
                  10,000+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Events Completed
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box textAlign="center">
                <Typography variant="h3" color="primary.main" fontWeight="bold" sx={{ fontFamily: 'Playfair Italic' }}>
                  Multiple
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Trusted Vendors
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box textAlign="center">
                <Typography variant="h3" color="primary.main" fontWeight="bold" sx={{ fontFamily: 'Playfair Italic' }}>
                  Across
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Punjab
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box textAlign="center">
                <Typography variant="h3" color="primary.main" fontWeight="bold" sx={{ fontFamily: 'Playfair Italic' }}>
                  4.9★
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Average Rating
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
