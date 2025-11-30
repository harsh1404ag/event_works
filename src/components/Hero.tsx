'use client';

import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 1, md: 0 } }}>
      <Box
        sx={{
          height: { xs: '60vh', md: '70vh' },
          backgroundImage: 'url(/images/hero_image.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: { xs: 1, md: 2 },
          willChange: 'transform',
        }}
      >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              fontFamily: 'Azonix',
              fontSize: { xs: '2rem', md: '3.5rem' },
              mb: 2,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textShadow: '3px 3px 10px rgba(0,0,0,0.8)',
            }}
          >
            Crafting Your Vision
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#050505ff',
              fontFamily: 'Azonix',
              fontSize: { xs: '0.9rem', md: '1.2rem' },
              mb: 4,
              textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
            }}
          >
            Since 2004
          </Typography>
          <Link href="/services" passHref>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#D4AF37',
                color: '#000',
                px: 5,
                py: 2,
                fontFamily: 'Azonix',
                fontSize: { xs: '0.9rem', md: '1.1rem' },
                '&:hover': {
                  bgcolor: '#B8941F',
                },
              }}
            >
              Explore Services
            </Button>
          </Link>
        </Box>
      </motion.div>
      </Box>
    </Box>
  );
}