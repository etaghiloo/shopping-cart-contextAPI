import { createContext, useContext, useEffect, useState } from "react";

const themeContext = createContext()
export function useTheme() {
    return useContext(themeContext)
}
export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme")) : "light")
    
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme))
    }, [theme])
    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme) {
            setTheme(JSON.parse(theme))
        }
    }, [])

    return (
        <themeContext.Provider value={{theme, setTheme}}>
            {children}
        </themeContext.Provider>
    )
}