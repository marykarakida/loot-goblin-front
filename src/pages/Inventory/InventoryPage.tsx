import React from 'react';

import { InventoryProvider } from '../../shared/contexts';

import { EquipmentDetail, Inventory } from '../../shared/components/Inventory';

export function InventoryPage() {
    return (
        <InventoryProvider>
            <div className="m-4 flex flex-col">
                <div className="h-96 xl:flex xl:gap-10">
                    <div className="h-full w-96 bg-amber-400"></div>
                    <EquipmentDetail />
                </div>
                <Inventory />
            </div>
        </InventoryProvider>
    );
}
