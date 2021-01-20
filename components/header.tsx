import React, { Fragment, FunctionComponent, useContext } from "react";
import { LanguageContext } from "../context/languageContext";
import useTranslation from "../hooks/useTranslation";

export const Header: FunctionComponent = () => {
    
    const { t } = useTranslation()

    const [locale, setLanguage] = useContext(LanguageContext)

    return(
        <Fragment>
            <h2>{t("title")} Mans !</h2>
            
            <p>{t("slogan")}</p>

            <button onClick={() => setLanguage('en')}> switch to English</button><br/>
            <button onClick={() => setLanguage('fr')}> switch to French</button><br/>
            <button onClick={() => setLanguage('it')}> switch to Italian</button>
        </Fragment>
    )
}

export default Header