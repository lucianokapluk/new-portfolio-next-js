
import { createContext, useContext, useState } from "react";

const Context = createContext();
export function TabIndexProvider({ children }) {
    const [tabIndex, settabIndex] = useState(0);
    return (
        <Context.Provider value={[tabIndex, settabIndex]}>{children}</Context.Provider>
    );
}

export function useTabIndexContext() {
    return useContext(Context);
}