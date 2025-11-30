'use client';

import { Box, Typography, Grid, TextField, MenuItem, Button, Card, CardContent } from '@mui/material';
import { BasicInfo } from '@/app/package-builder/page';

interface BasicInfoStepProps {
  basicInfo: BasicInfo;
  setBasicInfo: (info: BasicInfo) => void;
  onNext: () => void;
}

const cities = ['Ludhiana', 'Phagwara', 'Jalandhar'];
const budgetRanges = ['1-2 Lakhs', '2-5 Lakhs', '5-10 Lakhs', '10+ Lakhs'];

export default function BasicInfoStep({ basicInfo, setBasicInfo, onNext }: BasicInfoStepProps) {
  const handleChange = (field: keyof BasicInfo, value: any) => {
    setBasicInfo({ ...basicInfo, [field]: value });
  };

  const isValid = basicInfo.weddingDate && basicInfo.city && basicInfo.guestCount > 0;

  return (
    <Box>
      <Typography variant="h4" gutterBottom align="center" color="primary.main">
        Let's Start Planning Your Dream Wedding
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
        Tell us a few details to create your personalized wedding package
      </Typography>

      <Card sx={{ maxWidth: 600, mx: 'auto' }}>
        <CardContent sx={{ p: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Wedding Date"
                type="date"
                value={basicInfo.weddingDate ? basicInfo.weddingDate.toISOString().split('T')[0] : ''}
                onChange={(e) => handleChange('weddingDate', new Date(e.target.value))}
                InputLabelProps={{ shrink: true }}
                inputProps={{ min: new Date().toISOString().split('T')[0] }}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="City"
                value={basicInfo.city}
                onChange={(e) => handleChange('city', e.target.value)}
                required
              >
                {cities.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Number of Guests"
                type="number"
                value={basicInfo.guestCount}
                onChange={(e) => handleChange('guestCount', parseInt(e.target.value) || 0)}
                inputProps={{ min: 1, max: 2000 }}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label="Budget Range"
                value={basicInfo.budgetRange}
                onChange={(e) => handleChange('budgetRange', e.target.value)}
                required
              >
                {budgetRanges.map((range) => (
                  <MenuItem key={range} value={range}>
                    ₹{range}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={onNext}
              disabled={!isValid}
              sx={{ px: 4, py: 1.5 }}
            >
              Continue to Themes
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}