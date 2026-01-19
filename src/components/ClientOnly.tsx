import React, { useState, useEffect, useContext, createContext, ReactNode } from 'react';

const ClientContext = createContext<boolean>(false);

export interface ClientOnlyProps {
    children: ReactNode;
    fallback?: ReactNode;
}

/**
 * A component that only renders its children on the client-side (after hydration).
 * Useful for avoiding hydration mismatches for components that rely on window/document
 * or local storage.
 * 
 * Includes an optimization for nested ClientOnly components to avoid waterfall rendering effects.
 */
export const ClientOnly: React.FC<ClientOnlyProps> = ({ children, fallback = null }: ClientOnlyProps) => {
    // If we are already inside a ClientOnly wrapper, we know we are on the client
    // and can render immediately without waiting for an effect.
    const isAlreadyClient = useContext(ClientContext);
    const [hasMounted, setHasMounted] = useState(isAlreadyClient);

    useEffect(() => {
        if (!isAlreadyClient) {
            setHasMounted(true);
        }
    }, [isAlreadyClient]);

    if (!hasMounted) {
        return <>{fallback}</>;
    }

    return (
        <ClientContext.Provider value={true}>
            {children}
        </ClientContext.Provider>
    );
};
