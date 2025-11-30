'use client';

import { Box, Container, Typography, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
  const router = useRouter();
  
  return (
    <Box sx={{ minHeight: '80vh', pt: 8, pb: 8 }}>
      <Container maxWidth="lg">
        <IconButton onClick={() => router.back()} sx={{ mb: 2 }}>
          <ArrowBack />
        </IconButton>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Typography variant="h2" align="center" gutterBottom sx={{ fontFamily: 'Azonix', textTransform: 'uppercase', mb: 6 }}>
            About Event Works
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Azonix', fontSize: '1.2rem', mb: 3, color: '#D4AF37' }}>
            Our Story
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
            Since 2004, Event Works has been crafting unforgettable event experiences in Phagwara. What started as a passion for creating beautiful celebrations has grown into a trusted name in event management across multiple cities in Punjab.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
            With over two decades of experience, we have successfully orchestrated more than 5000 events including weddings, corporate events, birthday parties, anniversaries, and social gatherings, each one unique and memorable. Our journey began in the heart of Phagwara, where we established ourselves as the go-to event management company for families and businesses seeking perfection in their special moments.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
            Today, Event Works proudly serves clients across Ludhiana, Phagwara, and Jalandhar, offering comprehensive event services including stunning decoration, professional photography, expert makeup artists, exquisite catering, and entertainment solutions. Our commitment to excellence and attention to detail has made us a preferred choice for discerning clients.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            We believe every event tells a story, and we're here to help you write yours. From intimate gatherings to grand celebrations, our experienced team ensures that every detail is perfectly executed, allowing you to focus on what truly matters – celebrating your special moments.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
