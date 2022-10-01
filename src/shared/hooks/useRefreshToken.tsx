import axios from 'axios';
import { useAuth } from './useAuth';

export function useRefreshToken(): () => Promise<string | void> {
    const { setAuth } = useAuth();

    const refresh = async () => {
        try {
            const refreshToken = localStorage.getItem('loot-goblin-refreshToken');
            const {
                data: { accessToken },
            } = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/token/refresh`, { refreshToken });

            setAuth({ accessToken: accessToken });
            localStorage.setItem('loot-goblin-refreshToken', accessToken);

            return accessToken;
        } catch (err: any) {
            if (!!err?.response.status) {
                localStorage.removeItem('loot-goblin-refreshToken');
            }
        }
    };

    return refresh;
}
