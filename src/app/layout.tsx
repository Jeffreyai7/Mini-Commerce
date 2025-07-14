import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/homepage/Navbar';
import Footer from '@/components/homepage/Footer';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/providers/ThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Mini Commerce',
    template: '%s | Mini Commerce',
  },
  description:
    'Mini Commerce - Your one-stop shoe destination. Athletic, casual, formal & designer shoes. Fast shipping & easy returns. Shop now!',
  keywords: [
    'shoes',
    'sneakers',
    'adidas',
    'nike',
    'brooks',
    'nath',
    'trainers',
    'buy shoes online',
  ],

  authors: [{ name: 'Mini Commerce Developers', url: 'https://example.ng' }],
  creator: 'Mini Commerce Team',
  publisher: 'Mini Commerce',

  openGraph: {
    title: 'Mini Commerce - Premium Shoe Store',
    description:
      'Shop sneakers, trainers, and boots at Mini Commerce. Top brands, fast delivery, secure checkout.',
    url: 'https://example.ng',
    siteName: 'Mini Commerce',
    type: 'website',
    locale: 'en_NG',
    images: [
      {
        url: '/images/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Mini Commerce - Premium Footwear Store',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Mini Commerce - Premium Footwear Store',
    description:
      'Shop the latest sneakers, trainers, and boots with fast delivery and secure checkout.',
    images: ['/images/og-image.png'],
    creator: '@MiniCommerce',
  },

  robots: 'index, follow',

  icons: {
    icon: [
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon.ico', type: 'image/x-icon' },
    ],
    apple: { url: '/images/apple-touch-icon.png', sizes: '180x180' },
  },

  manifest: '/site.webmanifest',

  metadataBase: new URL('https://example.ng'),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Mini Commerce',
              url: 'https://example.ng',
              logo: 'https://example.ng/images/logo.jpg',
              sameAs: [
                'https://www.facebook.com/minicommerce',
                'https://www.instagram.com/minicommerce',
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ReactQueryProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <Footer />
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
