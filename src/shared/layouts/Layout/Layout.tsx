import React from 'react';
import { Outlet } from 'react-router-dom';

import { useLoginPersistance } from '../../hooks';

import Top from './Top';

export function Layout() {
    const { isLoading } = useLoginPersistance();

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="h-screen bg-opacity-0">
            <div className="relative h-full px-4 py-9 2xl:container 2xl:mx-auto">
                <Top />
                <Outlet />
            </div>
        </div>
    );
}
