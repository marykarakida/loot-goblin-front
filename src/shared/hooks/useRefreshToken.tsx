import axios from 'axios';
import { useAuth } from './useAuth';

export function useRefreshToken(): () => Promise<string | void> {
    const { createSession, getSession, finishSession } = useAuth();

    const refresh = async () => {
        try {
            const { refreshToken } = getSession();
            const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/refresh`, { refreshToken });

            createSession(data);

            return data.accessToken;
        } catch (err: any) {
            if (!!err?.response.status) {
                finishSession();
            }
        }
    };

    return refresh;
}
