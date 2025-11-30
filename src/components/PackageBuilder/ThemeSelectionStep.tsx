'use client';

import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { PackageSelection, DecorTheme } from '@/types';

interface ThemeSelectionStepProps {
  packageSelection: Partial<PackageSelection>;
  setPackageSelection: (selection: Partial<PackageSelection>) => void;
  onNext: () => void;
  onBack: () => void;
}

// Mock theme data - in production, this would come from Firebase
const themes: DecorTheme[] = [
  {
    id: '1',
    name: 'Royal Red',
    description: 'Traditional elegance with rich red and gold accents',
    basePrice: 150000,
    images: ['/images/royal-red.jpg'],
    category: 'Traditional',
    isActive: true,
  },
  {
    id: '2',
    name: 'Floral Pastel',
    description: 'Soft pastels with fresh floral arrangements',
    basePrice: 120000,
    images: ['/images/floral-pastel.jpg'],
    category: 'Modern',
    isActive: true,
  },
  {
    id: '3',
    name: 'Minimalist Chic',
    description: 'Clean lines and sophisticated simplicity',
    basePrice: 100000,
    images: ['/images/minimalist.jpg'],
    category: 'Contemporary',
    isActive: true,
  },
  {
    id: '4',
    name: 'Vintage Romance',
    description: 'Timeless charm with vintage elements',
    basePrice: 130000,
    images: ['/images/vintage.jpg'],
    category: 'Vintage',
    isActive: true,
  },
  {
    id: '5',
    name: 'Garden Paradise',
    description: 'Natural beauty with lush greenery',
    basePrice: 140000,
    images: ['/images/garden.jpg'],
    category: 'Outdoor',
    isActive: true,
  },
  {
    id: '6',
    name: 'Bollywood Glam',
    description: 'Vibrant colors and dramatic lighting',
    basePrice: 180000,
    images: ['/images/bollywood.jpg'],
    category: 'Glamorous',
    isActive: true,
  },
];

export default function ThemeSelectionStep({
  packageSelection,
  setPackageSelection,
  onNext,
  onBack,
}: ThemeSelectionStepProps) {
  const handleThemeSelect = (theme: DecorTheme) => {
    setPackageSelection({
      ...packageSelection,
      theme,
      totalEstimate: theme.basePrice,
    });
  };

  const isValid = packageSelection.theme;

  return (
    <Box>
      <Typography variant="h4" gutterBottom align="center" color="primary.main">
        Choose Your Wedding Theme
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
        Select the perfect decor theme that reflects your style. This will be the foundation of your wedding package.
      </Typography>

      <Grid container spacing={3}>
        {themes.map((theme, index) => (
          <Grid item xs={12} sm={6} md={4} key={theme.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: packageSelection.theme?.id === theme.id ? 2 : 0,
                  borderColor: 'primary.main',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                  },
                }}
                onClick={() => handleThemeSelect(theme)}
              >
                <CardMedia
                  sx={{
                    height: 200,
                    background: `linear-gradient(45deg, ${
                      index % 2 === 0 ? '#D4AF37' : '#8B0000'
                    }, ${index % 2 === 0 ? '#8B0000' : '#D4AF37'})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                  }}
                >
                  {theme.name} Theme
                </CardMedia>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Typography variant="h6" component="h3">
                      {theme.name}
                    </Typography>
                    <Chip
                      label={theme.category}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {theme.description}
                  </Typography>
                  <Typography variant="h6" color="primary.main" fontWeight="bold">
                    Starting from ₹{theme.basePrice.toLocaleString('en-IN')}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" onClick={onBack} sx={{ px: 4 }}>
          Back
        </Button>
        <Button
          variant="contained"
          onClick={onNext}
          disabled={!isValid}
          sx={{ px: 4 }}
        >
          Add Services
        </Button>
      </Box>
    </Box>
  );
}