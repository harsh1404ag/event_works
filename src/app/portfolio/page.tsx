'use client';

import { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button, Dialog, DialogContent, IconButton } from '@mui/material';
import { Close, ArrowBack } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const categories = [
  { name: 'Decoration', works: [
    { title: 'Royal Wedding Decor', images: ['https://via.placeholder.com/400x300?text=Royal+1', 'https://via.placeholder.com/400x300?text=Royal+2'] },
    { title: 'Floral Paradise', images: ['https://via.placeholder.com/400x300?text=Floral+1', 'https://via.placeholder.com/400x300?text=Floral+2'] },
  ]},
  { name: 'Photography', works: [
    { title: 'Wedding Photography', images: ['https://via.placeholder.com/400x300?text=Photo+1', 'https://via.placeholder.com/400x300?text=Photo+2'] },
    { title: 'Event Photography', images: ['https://via.placeholder.com/400x300?text=Event+1', 'https://via.placeholder.com/400x300?text=Event+2'] },
  ]},
  { name: 'Makeup', works: [
    { title: 'Bridal Makeup', images: ['https://via.placeholder.com/400x300?text=Makeup+1', 'https://via.placeholder.com/400x300?text=Makeup+2'] },
  ]},
  { name: 'DJ', works: [
    { title: 'Wedding DJ Setup', images: ['https://via.placeholder.com/400x300?text=DJ+1', 'https://via.placeholder.com/400x300?text=DJ+2'] },
  ]},
  { name: 'Catering', works: [
    { title: 'Luxury Catering', images: ['https://via.placeholder.com/400x300?text=Catering+1', 'https://via.placeholder.com/400x300?text=Catering+2'] },
  ]},
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('Decoration');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedWork, setSelectedWork] = useState<any>(null);
  const router = useRouter();

  const handleWorkClick = (work: any) => {
    setSelectedWork(work);
    setOpenDialog(true);
  };

  return (
    <Box sx={{ minHeight: '80vh', pt: 8, pb: 8 }}>
      <Container maxWidth="lg">
        <IconButton onClick={() => router.back()} sx={{ mb: 2 }}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h2" align="center" gutterBottom sx={{ fontFamily: 'Azonix', textTransform: 'uppercase', mb: 4 }}>
          Our Portfolio
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 6, flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <Button
              key={cat.name}
              variant={selectedCategory === cat.name ? 'contained' : 'outlined'}
              onClick={() => setSelectedCategory(cat.name)}
              sx={{ 
                fontFamily: 'Azonix', 
                bgcolor: selectedCategory === cat.name ? '#D4AF37' : 'transparent',
                color: selectedCategory === cat.name ? '#000' : '#D4AF37',
                borderColor: '#D4AF37'
              }}
            >
              {cat.name}
            </Button>
          ))}
        </Box>

        <Grid container spacing={4}>
          {categories.find(c => c.name === selectedCategory)?.works.map((work, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
                <Card sx={{ cursor: 'pointer', '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s' } }} onClick={() => handleWorkClick(work)}>
                  <CardMedia component="img" height="250" image={work.images[0]} alt={work.title} />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontFamily: 'Azonix', fontSize: '1rem' }}>
                      {work.title}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
          <IconButton onClick={() => setOpenDialog(false)} sx={{ position: 'absolute', right: 8, top: 8, color: 'white', bgcolor: 'rgba(0,0,0,0.5)' }}>
            <Close />
          </IconButton>
          <DialogContent>
            <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Azonix', mb: 3 }}>
              {selectedWork?.title}
            </Typography>
            <Grid container spacing={2}>
              {selectedWork?.images.map((img: string, idx: number) => (
                <Grid item xs={12} md={6} key={idx}>
                  <img src={img} alt={`${selectedWork.title} ${idx + 1}`} style={{ width: '100%', borderRadius: '8px' }} />
                </Grid>
              ))}
            </Grid>
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
}
