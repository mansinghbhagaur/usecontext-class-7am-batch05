import { Store } from "./store";
import { useEffect, useState } from "react";

const ContextProvider = ({ children }) => {
const [ThemeMode, setThemeMode] = useState('light');
// useEffect(()=>{
//     setThemeMode("dark")
// })
  return <Store.Provider value={{ThemeMode, setThemeMode}}>
    {children}
    </Store.Provider>;
};


export default ContextProvider;