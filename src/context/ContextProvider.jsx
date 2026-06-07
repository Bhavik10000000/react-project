import React, {useState} from 'react'
import { MainContext } from './MainContext'

const ContextProvider = ({children}) => {
    const[theme,setTheme]=useState('dark');
    const handleTheme = () => {
        setTheme((prev) => prev=='dark' ? 'light' : 'dark');
    }
    const invertedTheme = theme ==='light' ? "dark1" : 'light1';
  return (
    <MainContext.Provider value={{theme,invertedTheme,handleTheme}}>
        {children}
    </MainContext.Provider>
  )
}

export default ContextProvider
