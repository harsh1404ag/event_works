// Database Schema Types

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

export interface Vendor {
  id: string;
  name: string;
  category: 'decor' | 'photography' | 'makeup' | 'catering' | 'music';
  basePrice: number;
  phone: string;
  portfolioImages: string[];
  rating: number;
  city: string;
  isActive: boolean;
  createdAt: Date;
}

export interface DecorTheme {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  images: string[];
  category: string;
  isActive: boolean;
}

export interface ServiceTier {
  id: string;
  name: string; // Standard, Premium, Luxury
  category: string;
  basePrice: number;
  features: string[];
  isActive: boolean;
}

export interface Lead {
  id: string;
  userId: string;
  status: 'new' | 'contacted' | 'quote_sent' | 'booked' | 'cancelled';
  weddingDate: Date;
  city: string;
  guestCount: number;
  budgetRange: string;
  selectedTheme: string;
  selectedServices: string[];
  estimatedCost: number;
  finalQuote?: number;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PackageSelection {
  theme: DecorTheme;
  services: {
    photography?: ServiceTier;
    makeup?: ServiceTier;
    catering?: ServiceTier;
    music?: ServiceTier;
  };
  totalEstimate: number;
}

export interface QuoteRequest {
  leadId: string;
  userInfo: {
    name: string;
    phone: string;
    email: string;
  };
  weddingDetails: {
    date: Date;
    city: string;
    guestCount: number;
    venue?: string;
  };
  packageSelection: PackageSelection;
  specialRequests?: string;
}