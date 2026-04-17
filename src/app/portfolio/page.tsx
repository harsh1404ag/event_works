'use client';

import { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button, Dialog, DialogContent, IconButton } from '@mui/material';
import { Close, ArrowBack } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const categories = [
  {
    name: 'Decoration',
    works: [
      { title: 'Home Decor', image: '/images/home_decoration.jpg', type: 'image' },
      { title: 'Floral Arrangements', image: '/images/Screenshot 2026-04-09 124724.png', type: 'image' },
      { title: 'Chunni Pandal', image: '/images/Screenshot 2026-04-09 124221.png', videoUrl: '/images/nitin_decoration.mp4', type: 'video' },
      { title: 'Yellow Design', image: '/images/yellow.png', type: 'image' },
      { title: 'Path Decoration', image: '/images/Screenshot 2026-04-09 132005.png', videoUrl: '/images/5.mp4', type: 'video' },
    ],
  },
  {
    name: 'DJ',
    works: [
      { title: 'Live Performance', image: '/images/Screenshot 2026-04-09 131741.png', type: 'video', videoUrl: '/images/dj1.mp4' },
      { title: 'Live Performance', image: '/images/Screenshot 2026-04-09 130547.png', type: 'video', videoUrl: '/images/dj2.mp4' },
    ],
  },
  {
    name: 'Catering',
    works: [
      { title: 'Buffet Setup', image: '/images/buffet.jpg', type: 'image' },
      { title: 'Food Presentation', image: '/images/food.jpg', type: 'image' },
      { title: 'Catering Service Video', image: '/images/Screenshot 2026-04-09 125049.png', type: 'video', videoUrl: '/images/catering.mp4' },
    ],
  },
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
        <Typography variant="h2" align="center" gutterBottom sx={{ fontFamily: 'Playfair Italic', textTransform: 'uppercase', mb: 4 }}>
          Our Portfolio
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 6, flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <Button
              key={cat.name}
              variant={selectedCategory === cat.name ? 'contained' : 'outlined'}
              onClick={() => setSelectedCategory(cat.name)}
              sx={{
                fontFamily: 'Lora Italic',
                bgcolor: selectedCategory === cat.name ? '#D4AF37' : 'transparent',
                color: selectedCategory === cat.name ? '#000' : '#D4AF37',
                borderColor: '#D4AF37',
              }}
            >
              {cat.name}
            </Button>
          ))}
        </Box>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {categories
            .find((c) => c.name === selectedCategory)
            ?.works.map((work, index) => (
              <Grid item xs={12} md={6} lg={4} key={index} sx={{ p: 1 }}>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
                  <Card
                    sx={{
                      cursor: 'pointer',
                      position: 'relative',
                      '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s' },
                    }}
                    onClick={() => handleWorkClick(work)}
                  >
                    <CardMedia component="img" height="250" image={work.image} alt={work.title} />
                    {work.type === 'video' && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: 60,
                          height: 60,
                          bgcolor: 'rgba(0, 0, 0, 0.7)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#D4AF37',
                          fontSize: 30,
                        }}
                      >
                        ▶
                      </Box>
                    )}
                    <CardContent>
                      <Typography variant="h6" sx={{ fontFamily: 'Playfair Italic', fontSize: '1rem' }}>
                        {work.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
        </Grid>

        <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
          <IconButton
            onClick={() => setOpenDialog(false)}
            sx={{ position: 'absolute', right: 8, top: 8, color: 'white', bgcolor: 'rgba(0,0,0,0.5)' }}
          >
            <Close />
          </IconButton>
          <DialogContent>
            <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Playfair Italic', mb: 3 }}>
              {selectedWork?.title}
            </Typography>
            {selectedWork?.type === 'image' ? (
              <img src={selectedWork?.image} alt={selectedWork?.title} style={{ width: '100%', borderRadius: '8px' }} />
            ) : (
              <video
                src={selectedWork?.videoUrl}
                controls
                style={{ width: '100%', borderRadius: '8px', maxHeight: '500px' }}
              />
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
}

