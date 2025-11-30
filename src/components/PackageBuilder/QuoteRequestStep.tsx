'use client';

import { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, TextField, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { PackageSelection } from '@/types';
import { BasicInfo } from '@/app/package-builder/page';
import { WhatsApp, Email, Phone } from '@mui/icons-material';

interface QuoteRequestStepProps {
  basicInfo: BasicInfo;
  packageSelection: Partial<PackageSelection>;
  onBack: () => void;
}

export default function QuoteRequestStep({
  basicInfo,
  packageSelection,
  onBack,
}: QuoteRequestStepProps) {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    phone: '',
    email: '',
    specialRequests: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const message = `New Quote Request:\nName: ${contactInfo.name}\nPhone: ${contactInfo.phone}\nEmail: ${contactInfo.email}\nDate: ${basicInfo.weddingDate?.toDateString()}\nCity: ${basicInfo.city}\nGuests: ${basicInfo.guestCount}\nBudget: ${basicInfo.budgetRange}\nSpecial Requests: ${contactInfo.specialRequests}`;
    window.open(`https://wa.me/919465638069?text=${encodeURIComponent(message)}`, '_blank');
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const isValid = contactInfo.name && contactInfo.phone && contactInfo.email;

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card sx={{ maxWidth: 600, mx: 'auto', textAlign: 'center' }}>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h4" color="primary.main" gutterBottom>
                🎉 Quote Request Submitted!
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Thank you for choosing Event Works
              </Typography>
            </Box>

            <Alert severity="success" sx={{ mb: 3 }}>
              Your wedding package request has been received. Our team will contact you within 2 hours 
              to confirm vendor availability and provide your final quote.
            </Alert>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
              <Typography variant="body1">
                <strong>What happens next?</strong>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                1. We'll check vendor availability for your wedding date
              </Typography>
              <Typography variant="body2" color="text.secondary">
                2. Our team will call you to discuss any special requirements
              </Typography>
              <Typography variant="body2" color="text.secondary">
                3. You'll receive a detailed quote via WhatsApp and email
              </Typography>
              <Typography variant="body2" color="text.secondary">
                4. Once approved, we'll handle all vendor coordination
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="outlined"
                startIcon={<WhatsApp />}
                href={`https://wa.me/919465638069?text=Hi, I just submitted a quote request for my event on ${basicInfo.weddingDate?.toDateString()}`}
                target="_blank"
              >
                WhatsApp Us
              </Button>
              <Button
                variant="outlined"
                startIcon={<Phone />}
                href="tel:+919465638069"
              >
                Call Now
              </Button>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom align="center" color="primary.main">
        Get Your Final Quote
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
        We're almost done! Please provide your contact details so our team can reach you 
        with vendor availability and final pricing.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom color="primary.main">
                Contact Information
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    value={contactInfo.name}
                    onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                    required
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="WhatsApp Number"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    required
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                    required
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Special Requests or Notes"
                    multiline
                    rows={4}
                    value={contactInfo.specialRequests}
                    onChange={(e) => setContactInfo({ ...contactInfo, specialRequests: e.target.value })}
                    placeholder="Any specific requirements, venue preferences, or special requests..."
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: 'fit-content' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom color="primary.main">
                What You'll Receive
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <WhatsApp color="primary" />
                  <Box>
                    <Typography variant="subtitle2">WhatsApp Confirmation</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Instant confirmation and updates
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Email color="primary" />
                  <Box>
                    <Typography variant="subtitle2">Detailed PDF Quote</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Complete breakdown with vendor details
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Phone color="primary" />
                  <Box>
                    <Typography variant="subtitle2">Personal Consultation</Typography>
                    <Typography variant="body2" color="text.secondary">
                      One-on-one discussion with our planner
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Alert severity="info" sx={{ mt: 3 }}>
                <Typography variant="body2">
                  <strong>Response Time:</strong> We guarantee to contact you within 2 hours 
                  during business hours (9 AM - 8 PM). Call us: +91 94656 38069
                </Typography>
              </Alert>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" onClick={onBack} sx={{ px: 4 }}>
          Back to Summary
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!isValid || isSubmitting}
          sx={{ px: 4 }}
        >
          {isSubmitting ? 'Submitting...' : 'Check Availability & Get Final Price'}
        </Button>
      </Box>
    </Box>
  );
}