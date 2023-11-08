'use client';

import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import classNames from 'classnames/bind';
import GoogleAnalytics from '@/components/GoogleAnalytics';

import styles from '../styles/global.module.scss';
import Footer from '@/components/footer/Footer';
import ReduxProvider from '@/redux/provider';

const cx = classNames.bind(styles);

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cx([inter.className, 'body'])}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Navbar />
        <ReduxProvider>{children}</ReduxProvider>
        <Footer />
      </body>
    </html>
  );
}
