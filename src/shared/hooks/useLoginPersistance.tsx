import { useEffect, useState } from 'react';
import { useRefreshToken } from './useRefreshToken';

export function useLoginPersistance() {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();

    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        verifyRefreshToken();

        return () => {
            isMounted = false;
        };
    }, []);

    return { isLoading };
}
