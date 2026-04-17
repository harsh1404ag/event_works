'use client';

import { Box, Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const features = [
  {
    image: '/images/premium_decor.jpg',
    title: 'Elegant Decor',
    description: 'Luxury decoration that elevates weddings, corporate events, and celebrations.',
  },
  {
    image: '/images/Steel-Catering-Counter.jpg',
    title: 'Premium Catering',
    description: 'Custom menus and seamless service for every gathering.',
  },
  {
    image: '/images/our-dj-night.jpg',
    title: 'Entertainment Experts',
    description: 'DJ and entertainment solutions that keep guests engaged all night.',
  },
  {
    image: '/images/haldi.jpg',
    title: 'Ceremony Styling',
    description: 'Beautiful ceremony coordination with a focus on authentic moments.',
  },
];

export default function FeaturesSection() {
  return (
    <Box sx={{ py: { xs: 4, md: 8 }, mt: { xs: 4, md: 8 }, bgcolor: 'background.default' }}>
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
            sx={{ fontFamily: 'Playfair Italic', textTransform: 'uppercase' }}
          >
            Our Signature Services
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}
          >
            Explore our most popular event solutions with clear service details and premium presentation.
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: 'none' }}>
                    <CardMedia
                      component="img"
                      image={feature.image}
                      alt={feature.title}
                      sx={{ width: '100%', height: 280, objectFit: 'cover' }}
                    />
                    <CardContent sx={{ p: 3, backgroundColor: 'background.paper' }}>
                      <Typography variant="h6" fontWeight={700} sx={{ mb: 1, fontFamily: 'Playfair Italic' }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
