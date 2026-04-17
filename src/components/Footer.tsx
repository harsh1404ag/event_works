'use client';

import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import { Facebook, Instagram, YouTube, LinkedIn } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#000', color: 'white', py: 4, mt: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" sx={{ mb: 1, fontFamily: 'Lora Italic', fontSize: '0.9rem' }}>
            Contact Us
          </Typography>
          <Box sx={{ mb: 2, fontFamily: 'Lora Italic', fontSize: '0.9rem' }}>
            <Link
              href="https://wa.me/919056220903"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#D4AF37', textDecoration: 'none', mr: 2, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
            >
              📞 +91 90562 20903
            </Link>
            <span style={{ color: 'white' }}>|</span>
            <Link
              href="mailto:harsh@eventworks.in"
              sx={{ color: '#D4AF37', textDecoration: 'none', ml: 2, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
            >
              ✉ harsh@eventworks.in
            </Link>
          </Box>
          <Typography variant="body1" sx={{ mb: 2, fontFamily: 'Lora Italic', fontSize: '0.9rem' }}>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton
              component="a"
              href="https://www.facebook.com/profile.php?id=100065148667081"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#D4AF37' }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com/vikas_tent/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#D4AF37' }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/harshagnihotr-i/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#D4AF37' }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
          <Typography variant="body2" sx={{ mt: 3, opacity: 0.7 }}>
            © 2026 Event Works. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

