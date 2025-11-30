'use client';

import { Box, Typography, Grid, Card, CardContent, Button, Divider, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { PackageSelection } from '@/types';
import { BasicInfo } from '@/app/package-builder/page';

interface SummaryStepProps {
  basicInfo: BasicInfo;
  packageSelection: Partial<PackageSelection>;
  onNext: () => void;
  onBack: () => void;
}

export default function SummaryStep({
  basicInfo,
  packageSelection,
  onNext,
  onBack,
}: SummaryStepProps) {
  const formatDate = (date: Date | null) => {
    if (!date) return 'Not selected';
    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const calculateServicesCost = () => {
    if (!packageSelection.services) return 0;
    
    return Object.values(packageSelection.services).reduce((total, service) => {
      if (service.category === 'catering') {
        return total + (service.basePrice * basicInfo.guestCount);
      }
      return total + service.basePrice;
    }, 0);
  };

  const themePrice = packageSelection.theme?.basePrice || 0;
  const servicesPrice = calculateServicesCost();
  const totalPrice = themePrice + servicesPrice;

  return (
    <Box>
      <Typography variant="h4" gutterBottom align="center" color="primary.main">
        Your Wedding Package Summary
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
        Review your selections before requesting a final quote
      </Typography>

      <Grid container spacing={4}>
        {/* Wedding Details */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom color="primary.main">
                  Wedding Details
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Date
                    </Typography>
                    <Typography variant="body1">
                      {formatDate(basicInfo.weddingDate)}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Location
                    </Typography>
                    <Typography variant="body1">{basicInfo.city}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Guest Count
                    </Typography>
                    <Typography variant="body1">{basicInfo.guestCount} guests</Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Budget Range
                    </Typography>
                    <Typography variant="body1">₹{basicInfo.budgetRange}</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Package Details */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom color="primary.main">
                  Selected Package
                </Typography>
                
                {/* Theme */}
                {packageSelection.theme && (
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {packageSelection.theme.name} Theme
                      </Typography>
                      <Chip label="Base Package" color="primary" size="small" />
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {packageSelection.theme.description}
                    </Typography>
                    <Typography variant="body1" fontWeight={600}>
                      ₹{packageSelection.theme.basePrice.toLocaleString('en-IN')}
                    </Typography>
                  </Box>
                )}

                <Divider sx={{ my: 2 }} />

                {/* Services */}
                <Typography variant="subtitle1" gutterBottom>
                  Additional Services
                </Typography>
                {packageSelection.services && Object.keys(packageSelection.services).length > 0 ? (
                  Object.entries(packageSelection.services).map(([serviceType, service]) => (
                    <Box key={serviceType} sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>
                          {serviceType} - {service.name}
                        </Typography>
                        <Typography variant="body1" fontWeight={600}>
                          ₹{(serviceType === 'catering' 
                            ? service.basePrice * basicInfo.guestCount 
                            : service.basePrice
                          ).toLocaleString('en-IN')}
                        </Typography>
                      </Box>
                      {serviceType === 'catering' && (
                        <Typography variant="caption" color="text.secondary">
                          ₹{service.basePrice}/person × {basicInfo.guestCount} guests
                        </Typography>
                      )}
                    </Box>
                  ))
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    No additional services selected
                  </Typography>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Total Cost */}
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card sx={{ bgcolor: 'primary.main', color: 'white' }}>
              <CardContent sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom>
                  Estimated Total Cost
                </Typography>
                <Typography variant="h3" fontWeight="bold">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
                  *This is an estimate. Final pricing will be provided after vendor confirmation.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" onClick={onBack} sx={{ px: 4 }}>
          Back to Services
        </Button>
        <Button variant="contained" onClick={onNext} sx={{ px: 4 }}>
          Get Final Quote
        </Button>
      </Box>
    </Box>
  );
}