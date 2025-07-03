import { createContext, useContext, useState, type ReactNode } from "react";

interface LocaleContextType {
  locale: string;
  setLocale: (locale: string) => void;
  currency: string;
  setCurrency: (currency: string) => void;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: "ru-RU",
  setLocale: () => {},
  currency: "RUB",
  setCurrency: () => {},
});

interface LocaleProviderProps {
  children: ReactNode;
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocale] = useState("ru-RU");
  const [currency, setCurrency] = useState("RUB");

  const value: LocaleContextType = {
    locale,
    setLocale,
    currency,
    setCurrency,
  };

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
};
