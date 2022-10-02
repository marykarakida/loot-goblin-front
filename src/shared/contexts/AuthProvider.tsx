import React, { createContext, useCallback, useMemo, useState } from 'react';

interface SessionData {
    accessToken: string | undefined;
    refreshToken: string | null;
}

type AuthData = Partial<Pick<SessionData, 'accessToken'>>;

interface IAuthContextValues {
    auth: AuthData;
    createSession(data: SessionData): void;
    getSession(): SessionData;
    finishSession(): void;
}

const defaultValues: IAuthContextValues = {
    auth: {},
    createSession: (data: SessionData) => {},
    getSession: (): SessionData => ({ accessToken: undefined, refreshToken: null }),
    finishSession: () => {},
};

const AuthContext = createContext<IAuthContextValues>(defaultValues);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [auth, setAuth] = useState<AuthData>({});

    const createSession = useCallback(({ accessToken, refreshToken }: SessionData) => {
        localStorage.setItem('loot-goblin-refreshToken', refreshToken as string);

        setAuth({ accessToken });
    }, []);

    const getSession = useCallback(() => {
        const refreshToken = localStorage.getItem('loot-goblin-refreshToken');
        const accessToken = auth.accessToken;

        return { refreshToken, accessToken };
    }, []);

    const finishSession = useCallback(() => {
        localStorage.removeItem('loot-goblin-refreshToken');

        setAuth({});
    }, []);

    const value = useMemo(() => ({ auth, createSession, getSession, finishSession }), [auth]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
