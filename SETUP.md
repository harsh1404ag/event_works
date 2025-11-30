# Event Works Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Firebase Setup**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project named "event-works-platform"
   - Enable the following services:
     - Firestore Database
     - Storage
     - Authentication
   - Copy your Firebase config

3. **Environment Setup**
   - Rename `.env.local` and add your Firebase configuration
   - Update the Firebase config values

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   - Open [http://localhost:3000](http://localhost:3000)

## Firebase Configuration

### Firestore Collections Structure

Create these collections in Firestore:

1. **leads**
   - Auto-generated documents
   - Fields: status, weddingDate, city, guestCount, etc.

2. **vendors**
   - Documents with vendor information
   - Fields: name, category, basePrice, phone, etc.

3. **themes**
   - Decor theme catalog
   - Fields: name, description, basePrice, images, etc.

### Security Rules

```javascript
// Firestore Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to themes and vendors
    match /themes/{document} {
      allow read: if true;
    }
    match /vendors/{document} {
      allow read: if true;
    }
    
    // Leads require authentication for write
    match /leads/{document} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## Google Cloud Platform Setup

Since you have $25k in Google Cloud credits:

1. **Enable APIs**
   - Firebase API
   - Cloud Firestore API
   - Cloud Storage API

2. **App Engine Deployment**
   ```bash
   npm run build
   gcloud app deploy
   ```

3. **WhatsApp Business API**
   - Set up WhatsApp Business API through Google Cloud
   - Configure webhook endpoints

## Features Overview

### Package Builder (Main Feature)
- 5-step wizard for wedding planning
- Visual theme selection
- Service tier selection
- Quote request system

### Admin Dashboard
- Lead management with Kanban board
- Vendor management system
- Quote generator with PDF export

### Mobile Optimization
- Touch-friendly interface
- Responsive design
- Mobile-first approach

## Development Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Deployment Checklist

- [ ] Firebase project created
- [ ] Environment variables configured
- [ ] Security rules updated
- [ ] Google Cloud project linked
- [ ] WhatsApp Business API configured
- [ ] Domain configured
- [ ] SSL certificate enabled

## Support

For technical support or questions about the Event Works platform, refer to the main README.md file or contact the development team.

---

**Ready to launch your wedding planning platform!** 🎉