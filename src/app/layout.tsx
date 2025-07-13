import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/homepage/Navbar';
import Footer from '@/components/homepage/Footer';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mini Commerce ',
  description:
    'Mini Commerce - Your one-stop shoe destination. Athletic, casual, formal & designer shoes. Fast shipping & easy returns. Shop now!',
  keywords: ['addidas, nike, brooks, nath'],

  authors: [{ name: 'Mini Commerce Dveelopers', url: 'https://example.com' }],

  openGraph: {
    title: 'Mini Commerce- Your one-stop destination for durability',
    description:
      'Mini Commerce - Your one-stop shoe destination. Athletic, casual, formal & designer shoes. Fast shipping & easy returns. Shop now!',
    url: 'https://example.ng',
    siteName: 'Mini Commerce',
    type: 'website',
    locale: 'en_NG',
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: 'Mini Commerce logo',
      },
    ],
  },

  robots: 'index, follow',

  //favicons & manifest
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
  },

  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <Header />
          {children}
          <Toaster position="top-right" />
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
