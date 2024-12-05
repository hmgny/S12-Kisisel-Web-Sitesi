import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();


export const ThemeContextProvider = ({children}) => {
    const[theme, setTheme] =useState(
        localStorage.getItem("theme") || "light"
    )

    useEffect(()=>{
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        localStorage.setItem("theme",theme)

    },[theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContext