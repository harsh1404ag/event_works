# Email Setup Guide

## Using Resend (Recommended - Free Tier Available)

1. **Sign up for Resend**
   - Go to [resend.com](https://resend.com)
   - Sign up for a free account
   - Free tier includes 100 emails/day

2. **Get API Key**
   - Go to API Keys section
   - Create a new API key
   - Copy the key

3. **Update .env.local**
   ```
   RESEND_API_KEY=re_your_api_key_here
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ADMIN_EMAIL=harsh.agni14@gmail.com
   ```

4. **Verify Domain (Optional for Production)**
   - For production, verify your domain in Resend
   - Update the 'from' address in `/api/send-email/route.ts`

## Alternative: Using Gmail SMTP

If you prefer Gmail:

1. **Enable 2-Factor Authentication** on your Gmail account

2. **Generate App Password**
   - Go to Google Account Settings
   - Security > 2-Step Verification > App Passwords
   - Generate password for "Mail"

3. **Update API route** to use nodemailer instead of Resend

## Testing

When a user submits the quote request form:
- Lead is saved to Firebase
- Email is sent to: harsh.agni14@gmail.com
- WhatsApp confirmation sent to client (if configured)

## Contact Information

All form submissions will be sent to:
- **Email**: harsh.agni14@gmail.com
- **Phone**: +91 94656 38069
- **WhatsApp**: +91 94656 38069