import { useEffect } from 'react';
import Axios from 'axios';
import { makeUseAxios, UseAxios } from 'axios-hooks';

import { useRefreshToken } from './useRefreshToken';
import { useAuth } from './useAuth';

export function useAxiosHook(authorization: boolean = false): { useAxios: UseAxios } {
    const refresh = useRefreshToken();
    const { getSession } = useAuth();

    const instance = Axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
    });

    useEffect(() => {
        if (!authorization) return;
        const requestIntercept = instance.interceptors.request.use(
            (config) => {
                const defaultConfig = { ...config };
                if (!defaultConfig.headers?.authorization) {
                    const { accessToken } = getSession();
                    defaultConfig.headers!.authorization = `Bearer ${accessToken}`;
                }
                return defaultConfig;
            },
            (error) => Promise.reject(error)
        );

        const responseIntercept = instance.interceptors.response.use(
            (response) => response,
            async (error) => {
                const prevRequest = error.config;
                if (error.response.status === 401 && !prevRequest.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers.authorization = `Bearer ${newAccessToken}`;
                    return instance(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            instance.interceptors.request.eject(requestIntercept);
            instance.interceptors.response.eject(responseIntercept);
        };
    }, [getSession, refresh]);

    return { useAxios: makeUseAxios({ axios: instance }) };
}
