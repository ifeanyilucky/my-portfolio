'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

const LoaderContext = createContext({
    isLoaded: false,
    setIsLoaded: (val: boolean) => { },
});

export function LoaderProvider({ children }: { children: ReactNode }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <LoaderContext.Provider value={{ isLoaded, setIsLoaded }}>
            {children}
        </LoaderContext.Provider>
    );
}

export const useLoader = () => useContext(LoaderContext);
