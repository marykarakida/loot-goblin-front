import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../hooks';

export function PublicRoute({ restricted, children }: { restricted: boolean; children: React.ReactElement }) {
    const { auth } = useAuth();

    if (auth?.accessToken && restricted) {
        return <Navigate to="/user" replace />;
    }

    return children;
}
