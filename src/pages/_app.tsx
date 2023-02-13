import '@/styles/globals.scss';
import '@/styles/prism-atom-dark.scss';

import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import { Toaster } from 'react-hot-toast';

import { cn } from '@/utils';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Signature Creator</title>
      </Head>
      <Toaster position="top-right" toastOptions={{}} />
      <main className={cn(inter.className, 'h-screen')}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
