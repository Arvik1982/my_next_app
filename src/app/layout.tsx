import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StoreProvider from '@/app/StoreProvider';
import './global.css';
import './normalize.css';
import TranslationsProvider from './TranslationProvider';
import initTranslations from '../i18n';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Creative Hub',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const i18nNamespaces = ['common'];
  const { resources } = await initTranslations('ru', i18nNamespaces);

  return (
    <html lang='en'>
      <body className={inter.className}>
        <StoreProvider>
          <TranslationsProvider namespaces={i18nNamespaces} locale={'ru'} resources={resources}>
            {children}
          </TranslationsProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
