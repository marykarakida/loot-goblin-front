import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../hooks';
import { useRouter } from '../hooks';

export function PrivateRoute({ children }: { children: React.ReactElement }) {
    const { auth } = useAuth();
    const { location } = useRouter();

    if (!auth?.accessToken) {
        return <Navigate to="/sign-in" state={{ from: location }} replace />;
    }

    return children;
}
