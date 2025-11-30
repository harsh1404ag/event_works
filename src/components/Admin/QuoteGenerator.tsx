'use client';

import { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
} from '@mui/material';
import { Download as DownloadIcon, Send as SendIcon } from '@mui/icons-material';

interface QuoteItem {
  id: string;
  service: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export default function QuoteGenerator() {
  const [clientInfo, setClientInfo] = useState({
    name: '',
    phone: '',
    email: '',
    weddingDate: '',
    venue: '',
    guestCount: 100,
  });

  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([
    {
      id: '1',
      service: 'Royal Red Theme Decor',
      description: 'Complete venue decoration with royal red theme including stage, mandap, and guest seating area',
      quantity: 1,
      rate: 150000,
      amount: 150000,
    },
    {
      id: '2',
      service: 'Premium Photography',
      description: '8 hours coverage, 400 edited photos, same day highlights, drone shots',
      quantity: 1,
      rate: 45000,
      amount: 45000,
    },
  ]);

  const [additionalCharges, setAdditionalCharges] = useState({
    transportation: 5000,
    setupCharges: 10000,
    taxes: 0, // Will be calculated
  });

  const subtotal = quoteItems.reduce((sum, item) => sum + item.amount, 0);
  const otherCharges = additionalCharges.transportation + additionalCharges.setupCharges;
  const taxableAmount = subtotal + otherCharges;
  const gstAmount = taxableAmount * 0.18; // 18% GST
  const totalAmount = taxableAmount + gstAmount;

  const handleAddItem = () => {
    const newItem: QuoteItem = {
      id: Date.now().toString(),
      service: '',
      description: '',
      quantity: 1,
      rate: 0,
      amount: 0,
    };
    setQuoteItems([...quoteItems, newItem]);
  };

  const handleUpdateItem = (id: string, field: keyof QuoteItem, value: any) => {
    const updatedItems = quoteItems.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        if (field === 'quantity' || field === 'rate') {
          updatedItem.amount = updatedItem.quantity * updatedItem.rate;
        }
        return updatedItem;
      }
      return item;
    });
    setQuoteItems(updatedItems);
  };

  const handleRemoveItem = (id: string) => {
    setQuoteItems(quoteItems.filter(item => item.id !== id));
  };

  const generatePDF = () => {
    // In production, this would generate a PDF using jsPDF
    alert('PDF generation would be implemented here using jsPDF library');
  };

  const sendQuote = () => {
    // In production, this would send the quote via email/WhatsApp
    alert('Quote would be sent via email and WhatsApp');
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Quote Generator
      </Typography>

      <Grid container spacing={4}>
        {/* Client Information */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary.main">
                Client Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Client Name"
                    value={clientInfo.name}
                    onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    value={clientInfo.phone}
                    onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    value={clientInfo.email}
                    onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Wedding Date"
                    type="date"
                    value={clientInfo.weddingDate}
                    onChange={(e) => setClientInfo({ ...clientInfo, weddingDate: e.target.value })}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Guest Count"
                    type="number"
                    value={clientInfo.guestCount}
                    onChange={(e) => setClientInfo({ ...clientInfo, guestCount: parseInt(e.target.value) })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Venue"
                    value={clientInfo.venue}
                    onChange={(e) => setClientInfo({ ...clientInfo, venue: e.target.value })}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Quote Summary */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary.main">
                Quote Summary
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography>Subtotal:</Typography>
                  <Typography>₹{subtotal.toLocaleString('en-IN')}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography>Transportation:</Typography>
                  <Typography>₹{additionalCharges.transportation.toLocaleString('en-IN')}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography>Setup Charges:</Typography>
                  <Typography>₹{additionalCharges.setupCharges.toLocaleString('en-IN')}</Typography>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography>Taxable Amount:</Typography>
                  <Typography>₹{taxableAmount.toLocaleString('en-IN')}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography>GST (18%):</Typography>
                  <Typography>₹{gstAmount.toLocaleString('en-IN')}</Typography>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h6" color="primary.main">Total Amount:</Typography>
                  <Typography variant="h6" color="primary.main">
                    ₹{totalAmount.toLocaleString('en-IN')}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Quote Items */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" color="primary.main">
                  Quote Items
                </Typography>
                <Button variant="outlined" onClick={handleAddItem}>
                  Add Item
                </Button>
              </Box>

              <TableContainer component={Paper} variant="outlined">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Service</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Qty</TableCell>
                      <TableCell>Rate</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {quoteItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <TextField
                            size="small"
                            value={item.service}
                            onChange={(e) => handleUpdateItem(item.id, 'service', e.target.value)}
                            placeholder="Service name"
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            size="small"
                            multiline
                            rows={2}
                            value={item.description}
                            onChange={(e) => handleUpdateItem(item.id, 'description', e.target.value)}
                            placeholder="Service description"
                            sx={{ minWidth: 200 }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            size="small"
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleUpdateItem(item.id, 'quantity', parseInt(e.target.value))}
                            sx={{ width: 80 }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            size="small"
                            type="number"
                            value={item.rate}
                            onChange={(e) => handleUpdateItem(item.id, 'rate', parseInt(e.target.value))}
                            sx={{ width: 100 }}
                          />
                        </TableCell>
                        <TableCell>
                          ₹{item.amount.toLocaleString('en-IN')}
                        </TableCell>
                        <TableCell>
                          <Button
                            size="small"
                            color="error"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            Remove
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Actions */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              variant="outlined"
              startIcon={<DownloadIcon />}
              onClick={generatePDF}
              size="large"
            >
              Download PDF
            </Button>
            <Button
              variant="contained"
              startIcon={<SendIcon />}
              onClick={sendQuote}
              size="large"
            >
              Send Quote
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}