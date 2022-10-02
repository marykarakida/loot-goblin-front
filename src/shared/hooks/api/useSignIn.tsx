import { useAxiosHook } from '../useAxioHook';

export function useSignIn() {
    const { useAxios } = useAxiosHook();
    const [{ loading, error }, loginToAccount] = useAxios({ method: 'POST', url: '/auth/login' }, { manual: true });

    return { loading, error, loginToAccount };
}
