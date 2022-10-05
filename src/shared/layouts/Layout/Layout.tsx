import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { useLoginPersistance } from '../../hooks';

import Top from './Top';

export function Layout() {
    const { isLoading } = useLoginPersistance();

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="h-screen bg-opacity-0 bg-gradient-to-t from-amber-300 via-purple-200 to-purple-100  bg-cover bg-center bg-no-repeat">
            <div className="relative h-screen px-4 py-9 2xl:container 2xl:mx-auto">
                <Top />
                <Outlet />
            </div>
        </div>
    );
}
