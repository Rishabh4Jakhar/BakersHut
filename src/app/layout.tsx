import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { site } from '@/lib/site';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
});

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: {
    default: 'Bakers Hut',
    template: '%s | Bakers Hut',
  },
  description: `${site.tagline} ${site.description}`,
  metadataBase: new URL('https://bakers-hut.example'),
  applicationName: site.name,
  keywords: ['Bakers Hut', 'bakery', 'cakes', 'eggless cakes', 'pizza', 'Jharoda Kalan', 'New Delhi'],
  icons: {
    icon: [{ url: site.images.storefront.src, type: 'image/jpeg' }],
    apple: [{ url: site.images.storefront.src, type: 'image/jpeg' }],
  },
  openGraph: {
    title: 'Bakers Hut',
    description: `${site.tagline} ${site.description}`,
    type: 'website',
    siteName: site.name,
    locale: 'en_IN',
    images: [
      {
        url: site.images.storefront.src,
        width: site.images.storefront.width,
        height: site.images.storefront.height,
        alt: 'Bakers Hut storefront',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.tagline,
    images: [site.images.storefront.src],
  },
};

export const viewport: Viewport = {
  themeColor: '#9f2323',
  colorScheme: 'light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${display.variable} ${body.variable} bg-background text-foreground antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
