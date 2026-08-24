import React, {useState, createContext, useMemo} from 'react';

export const CustomerContext = createContext(null);

export const CustomerProvider = ({children}) => {
    const [customers, setCustomers] = useState([]);

    const value = useMemo(() => ({
        customers, setCustomers,
    }), [customers]);

    return <CustomerContext.Provider value={value}>{children}</CustomerContext.Provider>;
};