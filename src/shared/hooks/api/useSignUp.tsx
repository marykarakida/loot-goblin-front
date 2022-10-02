import { useAxiosHook } from '../useAxioHook';

export function useSignUp() {
    const { useAxios } = useAxiosHook();
    const [{ loading, error }, createAccount] = useAxios({ method: 'POST', url: '/auth' }, { manual: true });

    return { loading, error, createAccount };
}
