'use client';

import { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Collapse, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const services = [
  { 
    title: 'Decoration', 
    budgets: ['Budget: ₹50,000 - ₹1,00,000', 'Budget: ₹1,00,000 - ₹2,50,000', 'Budget: ₹2,50,000+'] 
  },
  { 
    title: 'Catering', 
    budgets: ['Budget: ₹300/plate', 'Budget: ₹500/plate', 'Budget: ₹800+/plate'] 
  },
  { 
    title: 'Makeup', 
    budgets: ['Budget: ₹15,000 - ₹30,000', 'Budget: ₹30,000 - ₹60,000', 'Budget: ₹60,000+'] 
  },
  { 
    title: 'DJ & Entertainment', 
    budgets: ['Budget: ₹20,000 - ₹40,000', 'Budget: ₹40,000 - ₹80,000', 'Budget: ₹80,000+'] 
  },
  { 
    title: 'Photography', 
    budgets: ['Budget: ₹40,000 - ₹80,000', 'Budget: ₹80,000 - ₹1,50,000', 'Budget: ₹1,50,000+'] 
  },
];

export default function ServicesPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const router = useRouter();

  return (
    <Box sx={{ minHeight: '80vh', pt: 8, pb: 8 }}>
      <Container maxWidth="lg">
        <IconButton onClick={() => router.back()} sx={{ mb: 2 }}>
          <ArrowBack />
        </IconButton>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Typography variant="h2" align="center" gutterBottom sx={{ fontFamily: 'Azonix', textTransform: 'uppercase', mb: 6 }}>
            Our Services
          </Typography>
        </motion.div>
        
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Azonix', fontSize: '1.2rem', mb: 2 }}>
                      {service.title}
                    </Typography>
                    <Button 
                      fullWidth 
                      variant="outlined" 
                      onClick={() => setExpanded(expanded === service.title ? null : service.title)}
                      sx={{ mb: 2, borderColor: '#D4AF37', color: '#D4AF37' }}
                    >
                      {expanded === service.title ? 'Hide' : 'View'} Budget Options
                    </Button>
                    <Collapse in={expanded === service.title}>
                      <Box sx={{ mt: 2 }}>
                        {service.budgets.map((budget, idx) => (
                          <Typography key={idx} variant="body2" sx={{ py: 1, borderBottom: '1px solid #eee' }}>
                            • {budget}
                          </Typography>
                        ))}
                      </Box>
                    </Collapse>
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
