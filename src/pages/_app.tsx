import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Header from '@/features/Header/index';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
