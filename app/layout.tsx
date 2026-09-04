import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://eliaszpiotr.github.io'),
  title: 'Eliasz Piotr — Computer Science Portfolio',
  description: 'Computer Science graduate building practical, data-driven software with Python.',
  openGraph: {
    title: 'Eliasz Piotr — Computer Science Portfolio',
    description: 'Computer Science graduate building practical, data-driven software with Python.',
    url: 'https://eliaszpiotr.github.io',
    siteName: 'Eliasz Piotr',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Eliasz Piotr — Computer Science, Python and Data' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eliasz Piotr — Computer Science Portfolio',
    description: 'Computer Science graduate building practical, data-driven software with Python.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
