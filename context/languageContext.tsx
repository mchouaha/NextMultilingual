import { createContext, useState } from "react"

export const defaultLocale = "en"
export const locales = ["fr", "en"]
export const LanguageContext = createContext([])
export const LanguageProvider: React.FC = ({ children }) => {
    const [locale, setLocale] = useState(defaultLocale)
  
    const setLanguage = (lang: string) => {
      setLocale(lang)
    }

    return (
      <LanguageContext.Provider value={[locale, setLanguage]}>
        {children}
      </LanguageContext.Provider>
    )
  }