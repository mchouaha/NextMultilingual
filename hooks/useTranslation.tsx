import { useContext } from "react"
import { LanguageContext, defaultLocale } from "../context/languageContext"
import { LangStrings } from "../intl/Strings"


export default function useTranslation() {
  const [locale] = useContext(LanguageContext)

  function t(key: string) {
    if (!LangStrings[locale][key]) {
      console.warn(`No string '${key}' for locale '${locale}'`)
    }

    return LangStrings[locale][key] || LangStrings[defaultLocale][key] || ""
  }

  return { t, locale }
}