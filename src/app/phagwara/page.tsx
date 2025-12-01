import { Metadata } from 'next';
import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Event Management & Catering Services in Phagwara | Event Works',
  description: 'Event Works - Premier event management and catering company in Phagwara. Expert wedding planning, corporate events, decoration, photography, DJ services. 5000+ successful events since 2004.',
  keywords: 'Event Management Phagwara, Best Catering Service Phagwara, Wedding Planner Phagwara, Corporate Event Management Phagwara, Birthday Party Planner Phagwara, Event Decoration Phagwara',
};

export default function PhagwaraPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#000' }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h1" sx={{ fontFamily: 'Azonix', fontSize: { xs: '2rem', md: '3rem' }, color: '#D4AF37', mb: 2, textAlign: 'center' }}>
          Event Management in Phagwara
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#fff', mb: 4, textAlign: 'center' }}>
          Luxury Event Planning & Best Catering Services in Phagwara
        </Typography>

        <Typography sx={{ color: '#fff', mb: 4, lineHeight: 1.8 }}>
          Event Works is Phagwara's premier event management company, proudly serving our home city since 2004. We specialize in creating unforgettable weddings, corporate events, birthday celebrations, and luxury gatherings across Phagwara.
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: '#1a1a1a', height: '100%' }}>
              <CardContent>
                <Typography sx={{ fontFamily: 'Azonix', color: '#D4AF37', mb: 2 }}>Wedding Planning</Typography>
                <Typography sx={{ color: '#fff' }}>Complete wedding management services in Phagwara with decoration, catering, photography, and entertainment.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: '#1a1a1a', height: '100%' }}>
              <CardContent>
                <Typography sx={{ fontFamily: 'Azonix', color: '#D4AF37', mb: 2 }}>Catering Services</Typography>
                <Typography sx={{ color: '#fff' }}>Best catering service in Phagwara with multi-cuisine options and professional staff for all event types.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: '#1a1a1a', height: '100%' }}>
              <CardContent>
                <Typography sx={{ fontFamily: 'Azonix', color: '#D4AF37', mb: 2 }}>Corporate Events</Typography>
                <Typography sx={{ color: '#fff' }}>Professional corporate event management in Phagwara for conferences, seminars, and business celebrations.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Button component={Link} href="/services" variant="contained" sx={{ bgcolor: '#D4AF37', color: '#000', fontFamily: 'Azonix', mr: 2, mb: 2 }}>
            View Services
          </Button>
          <Button component={Link} href="/contact" variant="outlined" sx={{ borderColor: '#D4AF37', color: '#D4AF37', fontFamily: 'Azonix', mb: 2 }}>
            Contact Us
          </Button>
        </Box>

        <Typography sx={{ color: '#fff', mb: 2, fontWeight: 'bold' }}>
          Why Choose Event Works in Phagwara?
        </Typography>
        <Typography sx={{ color: '#fff', mb: 1 }}>✓ 5000+ successful events since 2004</Typography>
        <Typography sx={{ color: '#fff', mb: 1 }}>✓ Based in Phagwara with deep local expertise</Typography>
        <Typography sx={{ color: '#fff', mb: 1 }}>✓ Complete event solutions under one roof</Typography>
        <Typography sx={{ color: '#fff', mb: 1 }}>✓ Competitive pricing with premium quality</Typography>
        <Typography sx={{ color: '#fff', mb: 4 }}>✓ 24/7 customer support</Typography>

        <Box sx={{ textAlign: 'center' }}>
          <Button component={Link} href="/" variant="text" sx={{ color: '#D4AF37' }}>
            ← Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
