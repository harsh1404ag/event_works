'use client';

import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, IconButton, Card, CardContent } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({ name: false, email: false, phone: false, message: false });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: !formData.name,
      email: !formData.email,
      phone: !formData.phone,
      message: !formData.message,
    };
    setErrors(newErrors);
    
    if (Object.values(newErrors).some(error => error)) return;

    const whatsappMessage = `New Contact Form Submission:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/919465638069?text=${encodeURIComponent(whatsappMessage)}`, '_blank');

    const mailtoLink = `mailto:support@eventworks.in?subject=Contact Form Submission&body=${encodeURIComponent(whatsappMessage)}`;
    window.location.href = mailtoLink;

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <Box sx={{ minHeight: '80vh', pt: 8, pb: 8 }}>
      <Container maxWidth="md">
        <IconButton onClick={() => router.back()} sx={{ mb: 2 }}>
          <ArrowBack />
        </IconButton>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Typography variant="h4" align="center" gutterBottom color="primary.main" sx={{ mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </Typography>
          
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" gutterBottom color="primary.main" sx={{ mb: 3 }}>
                Get in Touch
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      error={errors.name}
                      helperText={errors.name ? 'Name is required' : ''}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      error={errors.email}
                      helperText={errors.email ? 'Email is required' : ''}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      error={errors.phone}
                      helperText={errors.phone ? 'Phone number is required' : ''}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Reason to Contact"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      error={errors.message}
                      helperText={errors.message ? 'Message is required' : ''}
                      placeholder="Tell us how we can help you..."
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" size="large" fullWidth sx={{ bgcolor: '#D4AF37', color: '#000', py: 1.5, '&:hover': { bgcolor: '#B8941F' } }}>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
}
