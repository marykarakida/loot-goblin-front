import React, { createContext, useMemo, useState } from 'react';

interface IAuthData {
    accessToken: string;
}

interface IAuthContextValues {
    auth: Partial<IAuthData>;
    setAuth: (authData: Partial<IAuthData>) => void;
}

const AuthContext = createContext<IAuthContextValues>({ auth: {}, setAuth: () => {} });

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [auth, setAuth] = useState({});
    const value = useMemo(() => ({ auth, setAuth }), [auth]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
