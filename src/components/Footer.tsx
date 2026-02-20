'use client';

import { Box, Container, Typography, IconButton } from '@mui/material';
import { Facebook, Instagram, YouTube, LinkedIn } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#000', color: 'white', py: 4, mt: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" sx={{ mb: 2, fontFamily: 'Azonix', fontSize: '0.9rem' }}>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton href="https://www.facebook.com/profile.php?id=100065148667081" target="_blank" sx={{ color: '#D4AF37' }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://www.instagram.com/vikas_tent/" target="_blank" sx={{ color: '#D4AF37' }}>
              <Instagram />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/harshagnihotr-i/" target="_blank" sx={{ color: '#D4AF37' }}>
              <LinkedIn />
            </IconButton>
          </Box>
          <Typography variant="body2" sx={{ mt: 3, opacity: 0.7 }}>
            © 2025 Event Works. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
