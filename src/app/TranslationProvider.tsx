'use client';

import { I18nextProvider } from 'react-i18next';
import initTranslations from './../i18n';
import { createInstance } from 'i18next';
import { useAppSelector } from '@/lib/storeHooks';

interface TranslationsProviderProps {
  children: React.ReactNode;
  locale: string;
  namespaces: string[];
  resources: unknown;
}

export default function TranslationsProvider({ children, locale, namespaces, resources }: TranslationsProviderProps) {
  const lang = useAppSelector((state) => state.lang.lang);
  const i18n = createInstance();
  locale = lang;
  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
