'use client';

import { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from '@mui/material';
// @ts-ignore
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Lead } from '@/types';

// Mock lead data
const mockLeads: Lead[] = [
  {
    id: '1',
    userId: 'user1',
    status: 'new',
    weddingDate: new Date('2024-03-15'),
    city: 'Ludhiana',
    guestCount: 150,
    budgetRange: '5-10 Lakhs',
    selectedTheme: 'Royal Red',
    selectedServices: ['photography', 'makeup'],
    estimatedCost: 450000,
    notes: 'Prefers morning ceremony',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    userId: 'user2',
    status: 'contacted',
    weddingDate: new Date('2024-04-20'),
    city: 'Phagwara',
    guestCount: 200,
    budgetRange: '2-5 Lakhs',
    selectedTheme: 'Floral Pastel',
    selectedServices: ['photography', 'catering'],
    estimatedCost: 380000,
    notes: 'Vegetarian menu only',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-12'),
  },
];

const statusColumns = {
  new: { title: 'New Leads', color: '#f44336' },
  contacted: { title: 'Contacted', color: '#ff9800' },
  quote_sent: { title: 'Quote Sent', color: '#2196f3' },
  booked: { title: 'Booked', color: '#4caf50' },
  cancelled: { title: 'Cancelled', color: '#9e9e9e' },
};

export default function LeadManagement() {
  const [leads, setLeads] = useState<Lead[]>(mockLeads);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;
    
    if (source.droppableId !== destination.droppableId) {
      const updatedLeads = leads.map(lead => 
        lead.id === draggableId 
          ? { ...lead, status: destination.droppableId as Lead['status'], updatedAt: new Date() }
          : lead
      );
      setLeads(updatedLeads);
    }
  };

  const getLeadsByStatus = (status: Lead['status']) => {
    return leads.filter(lead => lead.status === status);
  };

  const handleLeadClick = (lead: Lead) => {
    setSelectedLead(lead);
    setDialogOpen(true);
  };

  const handleUpdateLead = () => {
    if (selectedLead) {
      const updatedLeads = leads.map(lead => 
        lead.id === selectedLead.id ? { ...selectedLead, updatedAt: new Date() } : lead
      );
      setLeads(updatedLeads);
      setDialogOpen(false);
    }
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Lead Management - Kanban Board
      </Typography>
      
      <DragDropContext onDragEnd={handleDragEnd}>
        <Grid container spacing={2}>
          {Object.entries(statusColumns).map(([status, config]) => (
            <Grid item xs={12} md={2.4} key={status}>
              <Card sx={{ minHeight: 400 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        bgcolor: config.color,
                        mr: 1,
                      }}
                    />
                    <Typography variant="h6" fontSize="0.9rem">
                      {config.title}
                    </Typography>
                    <Chip
                      label={getLeadsByStatus(status as Lead['status']).length}
                      size="small"
                      sx={{ ml: 'auto' }}
                    />
                  </Box>

                  <Droppable droppableId={status}>
                    {(provided) => (
                      <Box
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        sx={{ minHeight: 300 }}
                      >
                        {getLeadsByStatus(status as Lead['status']).map((lead, index) => (
                          <Draggable key={lead.id} draggableId={lead.id} index={index}>
                            {(provided) => (
                              <Card
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                sx={{
                                  mb: 1,
                                  cursor: 'pointer',
                                  '&:hover': { boxShadow: 2 },
                                }}
                                onClick={() => handleLeadClick(lead)}
                              >
                                <CardContent sx={{ p: 2 }}>
                                  <Typography variant="subtitle2" gutterBottom>
                                    {lead.selectedTheme}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    {lead.city} • {lead.guestCount} guests
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    {lead.weddingDate.toLocaleDateString()}
                                  </Typography>
                                  <Typography variant="body2" fontWeight="bold" color="primary.main">
                                    ₹{lead.estimatedCost.toLocaleString('en-IN')}
                                  </Typography>
                                </CardContent>
                              </Card>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </Box>
                    )}
                  </Droppable>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </DragDropContext>

      {/* Lead Details Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Lead Details</DialogTitle>
        <DialogContent>
          {selectedLead && (
            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Wedding Date"
                  type="date"
                  value={selectedLead.weddingDate.toISOString().split('T')[0]}
                  onChange={(e) => setSelectedLead({
                    ...selectedLead,
                    weddingDate: new Date(e.target.value)
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="City"
                  value={selectedLead.city}
                  onChange={(e) => setSelectedLead({
                    ...selectedLead,
                    city: e.target.value
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Guest Count"
                  type="number"
                  value={selectedLead.guestCount}
                  onChange={(e) => setSelectedLead({
                    ...selectedLead,
                    guestCount: parseInt(e.target.value)
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  label="Status"
                  value={selectedLead.status}
                  onChange={(e) => setSelectedLead({
                    ...selectedLead,
                    status: e.target.value as Lead['status']
                  })}
                >
                  {Object.entries(statusColumns).map(([status, config]) => (
                    <MenuItem key={status} value={status}>
                      {config.title}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Notes"
                  multiline
                  rows={4}
                  value={selectedLead.notes}
                  onChange={(e) => setSelectedLead({
                    ...selectedLead,
                    notes: e.target.value
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" gutterBottom>
                  Selected Services:
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {selectedLead.selectedServices.map(service => (
                    <Chip key={service} label={service} size="small" />
                  ))}
                </Box>
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleUpdateLead} variant="contained">
            Update Lead
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}