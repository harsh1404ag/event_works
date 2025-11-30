# Event Works - Managed Wedding Marketplace

A comprehensive wedding planning platform for the Indian market, built with Next.js and Firebase.

## 🎯 Project Overview

Event Works is a "Managed Marketplace" where the platform acts as an intermediary between clients and vendors, ensuring quality and trust. Unlike standard e-commerce sites, users cannot directly book vendors but request quotes through our managed process.

## 🏗️ Architecture

- **Frontend**: Next.js 14 with App Router
- **UI Framework**: Material-UI (instead of Tailwind for premium feel)
- **Database**: Firebase Firestore
- **Storage**: Firebase Storage
- **Authentication**: Firebase Auth
- **Styling**: Material-UI with custom gold/maroon theme
- **Animations**: Framer Motion

## 🚀 Key Features

### Client-Facing Features
- **Package Builder Wizard**: 5-step visual wedding planning process
- **Theme Selection**: Visual cards for decor themes (Royal Red, Floral Pastel, etc.)
- **Service Tiers**: Standard/Premium/Luxury options for each service
- **Mobile-First Design**: Optimized for touch screens
- **Quote Request System**: Lead capture instead of direct booking

### Admin Dashboard
- **Kanban Lead Management**: Drag-and-drop lead status tracking
- **Vendor Management**: Add/edit vendors with portfolio management
- **Quote Generator**: Professional PDF quote generation
- **WhatsApp Integration**: Automated vendor availability checks

## 📁 Project Structure

```
src/
├── app/
│   ├── admin/                 # Admin dashboard
│   ├── api/                   # API routes
│   ├── package-builder/       # Main package builder wizard
│   ├── layout.tsx            # Root layout with theme
│   └── page.tsx              # Landing page
├── components/
│   ├── Admin/                # Admin components
│   ├── PackageBuilder/       # Wizard step components
│   ├── UI/                   # Reusable UI components
│   ├── Hero.tsx              # Landing page hero
│   └── FeaturesSection.tsx   # Features showcase
├── lib/
│   ├── firebase.ts           # Firebase configuration
│   └── theme.ts              # Material-UI theme
├── types/
│   └── index.ts              # TypeScript interfaces
└── utils/
    └── whatsapp.ts           # WhatsApp integration utilities
```

## 🎨 Design System

### Color Palette
- **Primary Gold**: #D4AF37
- **Secondary Maroon**: #8B0000
- **Background**: Clean whites with subtle gradients
- **Accents**: Premium gold and deep red combinations

### Typography
- **Font**: Inter (clean, modern)
- **Hierarchy**: Clear heading structure
- **Mobile-optimized**: Responsive font sizes

## 🔧 Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Firebase Setup**
   - Create a Firebase project
   - Enable Firestore, Storage, and Authentication
   - Copy configuration to `.env.local`

3. **Environment Variables**
   ```bash
   # Copy .env.local and fill in your Firebase config
   NEXT_PUBLIC_FIREBASE_API_KEY=your_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
   # ... other Firebase config
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

## 📱 Package Builder Flow

1. **Basic Info**: Date, city, guest count, budget
2. **Theme Selection**: Visual theme cards with pricing
3. **Services**: Toggle services with tier selection
4. **Summary**: Complete package review
5. **Quote Request**: Contact form and lead capture

## 🔐 Admin Features

### Lead Management
- Kanban board with drag-and-drop
- Lead status: New → Contacted → Quote Sent → Booked
- Detailed lead information editing
- WhatsApp integration for vendor checks

### Vendor Management
- Add/edit vendor profiles
- Category-based organization
- Portfolio image management
- Active/inactive status toggle

### Quote Generator
- Professional quote creation
- Itemized service breakdown
- GST calculation
- PDF generation and email sending

## 🚀 Deployment

The project is optimized for deployment on Google Cloud Platform to utilize your $25k credits:

- **App Engine**: For Next.js application
- **Firebase**: For database and storage
- **Cloud Functions**: For serverless API endpoints
- **Cloud Storage**: For static assets

## 📞 WhatsApp Integration

The platform includes WhatsApp Business API integration for:
- Vendor availability checks
- Client confirmations
- Quote delivery
- Status updates

## 🎯 Business Model

- **Anchor Service**: Decor/Venue (primary revenue)
- **Add-on Services**: Photography, Makeup, Catering, Music
- **Managed Payments**: Platform handles all transactions
- **Quality Assurance**: Vetted vendor network

## 🔮 Future Enhancements

- Real-time vendor availability calendar
- AI-powered theme recommendations
- Advanced analytics dashboard
- Mobile app development
- Multi-language support

## 📊 Database Schema

### Collections
- `leads`: Wedding inquiries and status
- `vendors`: Vendor profiles and information
- `themes`: Decor theme catalog
- `services`: Service tiers and pricing
- `quotes`: Generated quotes and proposals

## 🛠️ Development Notes

- Uses TypeScript for type safety
- Material-UI components for consistent design
- Firebase for real-time data
- Responsive design principles
- SEO optimized with Next.js

---

**Event Works** - Making Dream Weddings Reality ✨