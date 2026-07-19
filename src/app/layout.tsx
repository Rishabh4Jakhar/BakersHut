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

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  name: site.name,
  description: site.tagline,
  image: site.images.storefront.src,
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '342, New Vision Colony, C-Block, Naveen Palace, Jharoda Kalan',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '110072',
    addressCountry: 'IN',
  },
  openingHours: 'Mo-Su 10:00-22:00',
  priceRange: '₹₹',
  servesCuisine: ['Bakery', 'Cakes', 'Pizza', 'Fast Food'],
  sameAs: [site.instagram],
  hasMap: site.mapDirectionsUrl,
};

export const metadata: Metadata = {
  title: {
    default: 'Bakers Hut',
    template: '%s | Bakers Hut',
  },
  description: `${site.tagline} ${site.description}`,
  metadataBase: new URL('https://bakers-hut.example'),
  applicationName: site.name,
  keywords: [
    'Bakers Hut',
    'bakery in Jharoda Kalan',
    'cake shop in New Delhi',
    'eggless cakes',
    'birthday cakes',
    'custom cakes',
    'pizza',
    'burgers',
    'bakery delivery',
    'party hall',
    'fast food',
    'ice creams',
    'snacks',
  ],
  category: 'Bakery',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, '\\u003c') }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
