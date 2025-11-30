'use client';

import { Box, Typography, Grid, Card, CardContent, Button, Switch, FormControlLabel, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { PackageSelection, ServiceTier } from '@/types';
import {
  PhotoCamera as PhotoIcon,
  Face as MakeupIcon,
  Restaurant as CateringIcon,
  MusicNote as MusicIcon,
} from '@mui/icons-material';

interface ServicesStepProps {
  packageSelection: Partial<PackageSelection>;
  setPackageSelection: (selection: Partial<PackageSelection>) => void;
  onNext: () => void;
  onBack: () => void;
}

// Mock service tiers data
const serviceTiers = {
  photography: [
    { id: 'photo-std', name: 'Standard', basePrice: 25000, features: ['4 hours coverage', '200 edited photos', 'Online gallery'] },
    { id: 'photo-prem', name: 'Premium', basePrice: 45000, features: ['8 hours coverage', '400 edited photos', 'Same day highlights', 'Drone shots'] },
    { id: 'photo-lux', name: 'Luxury', basePrice: 75000, features: ['Full day coverage', '600+ edited photos', 'Cinematic video', 'Album included'] },
  ],
  makeup: [
    { id: 'makeup-std', name: 'Standard', basePrice: 15000, features: ['Bridal makeup', 'Hair styling', 'Touch-ups'] },
    { id: 'makeup-prem', name: 'Premium', basePrice: 25000, features: ['HD makeup', 'Hair & styling', 'Family makeup', 'Trial included'] },
    { id: 'makeup-lux', name: 'Luxury', basePrice: 40000, features: ['Celebrity artist', 'Complete styling', 'Multiple looks', 'Skincare prep'] },
  ],
  catering: [
    { id: 'cater-std', name: 'Standard', basePrice: 400, features: ['3 course meal', 'Basic service', 'Standard menu'] },
    { id: 'cater-prem', name: 'Premium', basePrice: 650, features: ['5 course meal', 'Live counters', 'Premium ingredients'] },
    { id: 'cater-lux', name: 'Luxury', basePrice: 900, features: ['7 course meal', 'Celebrity chef', 'Exotic cuisines', 'Premium service'] },
  ],
  music: [
    { id: 'music-std', name: 'Standard', basePrice: 20000, features: ['DJ setup', '4 hours', 'Basic lighting'] },
    { id: 'music-prem', name: 'Premium', basePrice: 35000, features: ['Live band + DJ', '6 hours', 'Stage lighting', 'Sound system'] },
    { id: 'music-lux', name: 'Luxury', basePrice: 60000, features: ['Orchestra + DJ', 'Full day', 'Premium setup', 'Special effects'] },
  ],
};

const serviceIcons = {
  photography: <PhotoIcon sx={{ fontSize: 30 }} />,
  makeup: <MakeupIcon sx={{ fontSize: 30 }} />,
  catering: <CateringIcon sx={{ fontSize: 30 }} />,
  music: <MusicIcon sx={{ fontSize: 30 }} />,
};

export default function ServicesStep({
  packageSelection,
  setPackageSelection,
  onNext,
  onBack,
}: ServicesStepProps) {
  const handleServiceToggle = (serviceType: string, enabled: boolean) => {
    const newServices = { ...packageSelection.services };
    
    if (enabled) {
      // Default to Standard tier when enabling
      const standardTier = serviceTiers[serviceType as keyof typeof serviceTiers][0];
      newServices[serviceType as keyof typeof newServices] = {
        id: standardTier.id,
        name: standardTier.name,
        category: serviceType,
        basePrice: standardTier.basePrice,
        features: standardTier.features,
        isActive: true,
      };
    } else {
      delete newServices[serviceType as keyof typeof newServices];
    }

    updateTotalEstimate(newServices);
  };

  const handleTierSelect = (serviceType: string, tier: any) => {
    const newServices = { ...packageSelection.services };
    newServices[serviceType as keyof typeof newServices] = {
      id: tier.id,
      name: tier.name,
      category: serviceType,
      basePrice: tier.basePrice,
      features: tier.features,
      isActive: true,
    };

    updateTotalEstimate(newServices);
  };

  const updateTotalEstimate = (services: any) => {
    const basePrice = packageSelection.theme?.basePrice || 0;
    const servicesTotal = Object.values(services).reduce((total: number, service: any) => {
      if (service.category === 'catering') {
        return total + (service.basePrice * 100);
      }
      return total + service.basePrice;
    }, 0) as number;

    setPackageSelection({
      ...packageSelection,
      services,
      totalEstimate: basePrice + servicesTotal,
    });
  };

  const isServiceEnabled = (serviceType: string) => {
    return !!packageSelection.services?.[serviceType as keyof typeof packageSelection.services];
  };

  const getSelectedTier = (serviceType: string) => {
    return packageSelection.services?.[serviceType as keyof typeof packageSelection.services];
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom align="center" color="primary.main">
        Add Wedding Services
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
        Enhance your wedding package with our premium services. Toggle services on/off and choose your preferred tier.
      </Typography>

      <Grid container spacing={4}>
        {Object.entries(serviceTiers).map(([serviceType, tiers]) => (
          <Grid item xs={12} md={6} key={serviceType}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ color: 'primary.main', mr: 2 }}>
                    {serviceIcons[serviceType as keyof typeof serviceIcons]}
                  </Box>
                  <Typography variant="h6" sx={{ textTransform: 'capitalize', flexGrow: 1 }}>
                    {serviceType}
                  </Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={isServiceEnabled(serviceType)}
                        onChange={(e) => handleServiceToggle(serviceType, e.target.checked)}
                        color="primary"
                      />
                    }
                    label=""
                  />
                </Box>

                {isServiceEnabled(serviceType) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <Grid container spacing={2}>
                      {tiers.map((tier) => (
                        <Grid item xs={12} key={tier.id}>
                          <Card
                            variant="outlined"
                            sx={{
                              cursor: 'pointer',
                              border: getSelectedTier(serviceType)?.id === tier.id ? 2 : 1,
                              borderColor: getSelectedTier(serviceType)?.id === tier.id ? 'primary.main' : 'divider',
                              '&:hover': {
                                borderColor: 'primary.main',
                              },
                            }}
                            onClick={() => handleTierSelect(serviceType, tier)}
                          >
                            <CardContent sx={{ p: 2 }}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                <Typography variant="subtitle1" fontWeight={600}>
                                  {tier.name}
                                </Typography>
                                <Chip
                                  label={`₹${tier.basePrice.toLocaleString('en-IN')}${serviceType === 'catering' ? '/person' : ''}`}
                                  color="primary"
                                  size="small"
                                />
                              </Box>
                              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {tier.features.map((feature, index) => (
                                  <Typography key={index} variant="caption" color="text.secondary">
                                    • {feature}
                                  </Typography>
                                ))}
                              </Box>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" onClick={onBack} sx={{ px: 4 }}>
          Back
        </Button>
        <Button variant="contained" onClick={onNext} sx={{ px: 4 }}>
          Review Package
        </Button>
      </Box>
    </Box>
  );
}