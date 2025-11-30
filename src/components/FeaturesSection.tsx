'use client';

import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Palette as PaletteIcon,
  PhotoCamera as PhotoCameraIcon,
  Face as FaceIcon,
  Restaurant as RestaurantIcon,
  MusicNote as MusicNoteIcon,
  Support as SupportIcon,
} from '@mui/icons-material';

const features = [
  {
    icon: <PaletteIcon sx={{ fontSize: 40 }} />,
    title: 'Premium Decor Themes',
    description: 'Choose from our collection of stunning themes, from Royal elegance to Minimalist designs.',
  },
  {
    icon: <PhotoCameraIcon sx={{ fontSize: 40 }} />,
    title: 'Professional Photography',
    description: 'Capture every precious moment with our network of skilled photographers across three service tiers.',
  },
  {
    icon: <FaceIcon sx={{ fontSize: 40 }} />,
    title: 'Expert Makeup Artists',
    description: 'Look your absolute best with our professional makeup artists for any occasion.',
  },
  {
    icon: <RestaurantIcon sx={{ fontSize: 40 }} />,
    title: 'Exquisite Catering',
    description: 'Delight your guests with carefully crafted menus from our trusted catering partners.',
  },
  {
    icon: <MusicNoteIcon sx={{ fontSize: 40 }} />,
    title: 'DJ Services',
    description: 'Professional DJ and entertainment services to keep your celebration lively and memorable.',
  },
  {
    icon: <SupportIcon sx={{ fontSize: 40 }} />,
    title: '24/7 Support',
    description: 'Our dedicated team is always available to assist you throughout your event journey.',
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
            sx={{ fontFamily: 'Azonix', textTransform: 'uppercase' }}
          >
            Why Choose Event Works?
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
          >
            We're not just another booking platform. We're your trusted event planning partner, 
            ensuring every detail is perfect.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <Box
                      sx={{
                        color: 'primary.main',
                        mb: 2,
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      gutterBottom 
                      fontWeight={600}
                      sx={{ fontFamily: 'Azonix', fontSize: '0.9rem' }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" lineHeight={1.6}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}