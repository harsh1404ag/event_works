'use client';

import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const services = [
  {
    title: 'Premium Decoration',
    description: 'Transform your venue with stunning decor themes ranging from Royal elegance to Minimalist designs. Our expert team handles everything from setup to takedown.',
    image: '/images/Screenshot 2026-04-09 124221.png',
    details: [
      '✓ Custom theme designs',
      '✓ Professional installation',
      '✓ Lighting & ambiance setup',
      '✓ Floral arrangements',
      '✓ Complete venue coordination',
    ],
  },
  {
    title: 'Exquisite Catering',
    description: 'Delight your guests with carefully crafted multi-cuisine menus from our trusted catering partners.',
    image: '/images/food.jpg',
    details: [
      '✓ Multi-cuisine options',
      '✓ Professional staff',
      '✓ Customized menu planning',
      '✓ Beverage arrangements',
      '✓ Food quality assurance',
    ],
  },
  {
    title: 'DJ & Entertainment',
    description: 'Keep your celebration lively and memorable with professional DJ services and live entertainment.',
    image: '/images/Screenshot 2026-04-09 131741.png',
    details: [
      '✓ Professional DJ services',
      '✓ Sound system setup',
      '✓ Live performance coordination',
      '✓ Modern music collection',
      '✓ Crowd engagement expertise',
    ],
  },
];

export default function ServicesPage() {
  const router = useRouter();

  return (
    <Box sx={{ minHeight: '80vh', pt: 8, pb: 8 }}>
      <Container maxWidth="lg">
        <IconButton onClick={() => router.back()} sx={{ mb: 2 }}>
          <ArrowBack />
        </IconButton>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Typography variant="h2" align="center" gutterBottom sx={{ fontFamily: 'Playfair Italic', textTransform: 'uppercase', mb: 6 }}>
            Our Services
          </Typography>
        </motion.div>
        
        {services.map((service, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
            <Box sx={{ mb: 8 }}>
              <Grid container spacing={4} alignItems="stretch">
                <Grid item xs={12} md={6}>
                  <Card sx={{ height: '100%' }}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={service.image}
                      alt={service.title}
                    />
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box>
                    <Typography variant="h3" gutterBottom sx={{ fontFamily: 'Playfair Italic', fontSize: '1.8rem', mb: 2 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.8 }}>
                      {service.description}
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Playfair Italic', mb: 2 }}>
                      What's Included:
                    </Typography>
                    <Box>
                      {service.details.map((detail, idx) => (
                        <Typography key={idx} variant="body2" sx={{ mb: 1.5 }}>
                          {detail}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
}

