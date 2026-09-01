import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://zihangwu98.github.io'),
  title: 'Zihang Wu (吴子航) | Theoretical Computer Science',
  description:
    'Zihang Wu is a fifth-year PhD student studying graph algorithms, games on graphs, and complexity in sequential, communication, streaming, and cut-query models.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Zihang Wu (吴子航) | Theoretical Computer Science',
    description: 'Graph algorithms and games on graphs.',
    type: 'website',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zihang Wu (吴子航) | Theoretical Computer Science',
    description: 'Graph algorithms and games on graphs.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
