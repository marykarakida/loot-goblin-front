import React from 'react';
import { Outlet } from 'react-router-dom';

import Menu from './Menu';

export function Header() {
    return (
        <>
            <div className="w-full px-4">
                <div className="flex w-full items-center justify-between border-b-4 border-yellow-400 py-4">
                    <h1>Loot Goblin</h1>
                    <Menu />
                </div>
            </div>
            <Outlet />
        </>
    );
}
