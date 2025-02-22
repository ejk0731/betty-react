import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import './styles/globals.scss';
import RecoilContextProvider from '../components/RecoilContextProvider';

const oswald = Oswald({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Betty',
  description: 'E-Commerce website project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${oswald.className}`}>
      <body>
        <RecoilContextProvider>{children}</RecoilContextProvider>
      </body>
    </html>
  );
}
