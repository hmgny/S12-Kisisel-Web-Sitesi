import { createContext, useEffect, useState } from "react";

const LanguageContext = createContext();


export const LanguageContextProvider = ({children}) => {
    const[language, setLanguage] =useState(
        localStorage.getItem("language") || "en"
    )


    useEffect(()=>{
        localStorage.setItem("language", language)
    },[language])



    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}
export default LanguageContext