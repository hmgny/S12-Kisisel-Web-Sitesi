import { createContext, useState } from "react";

const ThemeContext = createContext();


export const ThemeContextProvider = ({children}) => {
    const[theme, setTheme] =useState("light")

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContext