'use client';

import { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Switch,
  FormControlLabel,
  Chip,
  Avatar,
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon } from '@mui/icons-material';
import { Vendor } from '@/types';

// Mock vendor data
const mockVendors: Vendor[] = [
  {
    id: '1',
    name: 'Royal Decorators',
    category: 'decor',
    basePrice: 150000,
    phone: '+91 98765 43210',
    portfolioImages: [],
    rating: 4.8,
    city: 'Ludhiana',
    isActive: true,
    createdAt: new Date('2024-01-01'),
  },
  {
    id: '2',
    name: 'Capture Moments Photography',
    category: 'photography',
    basePrice: 45000,
    phone: '+91 98765 43211',
    portfolioImages: [],
    rating: 4.9,
    city: 'Phagwara',
    isActive: true,
    createdAt: new Date('2024-01-02'),
  },
  {
    id: '3',
    name: 'Glamour Makeup Studio',
    category: 'makeup',
    basePrice: 25000,
    phone: '+91 98765 43212',
    portfolioImages: [],
    rating: 4.7,
    city: 'Jalandhar',
    isActive: true,
    createdAt: new Date('2024-01-03'),
  },
];

const categories = [
  { value: 'decor', label: 'Decor & Venue' },
  { value: 'photography', label: 'Photography' },
  { value: 'makeup', label: 'Makeup & Beauty' },
  { value: 'catering', label: 'Catering' },
  { value: 'music', label: 'Music & Entertainment' },
];

const cities = ['Ludhiana', 'Phagwara', 'Jalandhar'];

export default function VendorManagement() {
  const [vendors, setVendors] = useState<Vendor[]>(mockVendors);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState<Partial<Vendor>>({
    name: '',
    category: 'decor',
    basePrice: 0,
    phone: '',
    city: 'Ludhiana',
    rating: 4.0,
    isActive: true,
  });

  const handleOpenDialog = (vendor?: Vendor) => {
    if (vendor) {
      setSelectedVendor(vendor);
      setFormData(vendor);
      setIsEditing(true);
    } else {
      setSelectedVendor(null);
      setFormData({
        name: '',
        category: 'decor',
        basePrice: 0,
        phone: '',
        city: 'Ludhiana',
        rating: 4.0,
        isActive: true,
      });
      setIsEditing(false);
    }
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedVendor(null);
    setFormData({});
  };

  const handleSaveVendor = () => {
    if (isEditing && selectedVendor) {
      // Update existing vendor
      const updatedVendors = vendors.map(vendor =>
        vendor.id === selectedVendor.id
          ? { ...vendor, ...formData }
          : vendor
      );
      setVendors(updatedVendors);
    } else {
      // Add new vendor
      const newVendor: Vendor = {
        id: Date.now().toString(),
        ...formData as Vendor,
        portfolioImages: [],
        createdAt: new Date(),
      };
      setVendors([...vendors, newVendor]);
    }
    handleCloseDialog();
  };

  const handleToggleActive = (vendorId: string) => {
    const updatedVendors = vendors.map(vendor =>
      vendor.id === vendorId
        ? { ...vendor, isActive: !vendor.isActive }
        : vendor
    );
    setVendors(updatedVendors);
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      decor: '#D4AF37',
      photography: '#2196F3',
      makeup: '#E91E63',
      catering: '#FF9800',
      music: '#9C27B0',
    };
    return colors[category] || '#757575';
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5">
          Vendor Management
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add Vendor
        </Button>
      </Box>

      <Grid container spacing={3}>
        {vendors.map((vendor) => (
          <Grid item xs={12} sm={6} md={4} key={vendor.id}>
            <Card sx={{ height: '100%', opacity: vendor.isActive ? 1 : 0.6 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: getCategoryColor(vendor.category),
                      mr: 2,
                    }}
                  >
                    {vendor.name.charAt(0)}
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" noWrap>
                      {vendor.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {vendor.city}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Chip
                    label={categories.find(cat => cat.value === vendor.category)?.label}
                    size="small"
                    sx={{ bgcolor: getCategoryColor(vendor.category), color: 'white' }}
                  />
                </Box>

                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Base Price: ₹{vendor.basePrice.toLocaleString('en-IN')}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Rating: {vendor.rating}★
                </Typography>

                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Phone: {vendor.phone}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={vendor.isActive}
                        onChange={() => handleToggleActive(vendor.id)}
                        size="small"
                      />
                    }
                    label="Active"
                  />
                  <Button
                    size="small"
                    startIcon={<EditIcon />}
                    onClick={() => handleOpenDialog(vendor)}
                  >
                    Edit
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Vendor Form Dialog */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          {isEditing ? 'Edit Vendor' : 'Add New Vendor'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Vendor Name"
                value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Category"
                value={formData.category || 'decor'}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as Vendor['category'] })}
                required
              >
                {categories.map((category) => (
                  <MenuItem key={category.value} value={category.value}>
                    {category.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="City"
                value={formData.city || 'Ludhiana'}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
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
                label="Base Price"
                type="number"
                value={formData.basePrice || 0}
                onChange={(e) => setFormData({ ...formData, basePrice: parseInt(e.target.value) })}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                value={formData.phone || ''}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Rating"
                type="number"
                inputProps={{ min: 1, max: 5, step: 0.1 }}
                value={formData.rating || 4.0}
                onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) })}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.isActive || false}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  />
                }
                label="Active"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveVendor} variant="contained">
            {isEditing ? 'Update' : 'Add'} Vendor
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}