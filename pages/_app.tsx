import React from 'react'
import { LanguageProvider } from '../context/languageContext'

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  ) 
}

export default MyApp
