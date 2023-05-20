import { createContext, useState } from "react";

export const BgContext = createContext({
    bgImage: '',
    onBgChange: (newBg) => {},
})

export const BgContextProvider = ({children}) => {
    const [bgImage, setBgImage] = useState('https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80')

    const handleBgChange = (bg) => {
        setBgImage(bg);
    }

    const contextValue = {
        bgImage,
        onBgChange: handleBgChange,
    }

    return <BgContext.Provider value={contextValue}>
        {children}
    </BgContext.Provider>
}