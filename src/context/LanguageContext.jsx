import { createContext, useState } from "react";

const LanguageContext = createContext();


export const LanguageContextProvider = ({children}) => {
    const[language, setLanguage] =useState("en")

    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}
export default LanguageContext