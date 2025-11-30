import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeRegistry from '@/components/ThemeRegistry';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Event Works - Best Event Management Company in Ludhiana, Phagwara, Jalandhar | Since 2004',
  description: 'Top-rated event management company in Punjab. Expert wedding planning, catering, decoration, photography, DJ services in Ludhiana, Phagwara, Jalandhar. 5000+ successful events since 2004.',
  keywords: 'best event management company Ludhiana, best event management company Phagwara, best event management company Jalandhar, wedding planner Punjab, best catering service Ludhiana, best catering service Phagwara, best catering service Jalandhar, wedding decoration Ludhiana, event planner near me, corporate event management Punjab, birthday party planner, best wedding planner Ludhiana, professional event management, top event company Punjab',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <Navigation />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}