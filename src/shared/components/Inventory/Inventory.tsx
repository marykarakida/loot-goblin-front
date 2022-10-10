import React from 'react';

import inventoryConfig from '../../../configs/inventoryConfig';

import { useInventory } from '../../hooks';

import { InventorySquare } from './InventorySquare';

export interface EquipmentData {
    id: string;
    text: string;
}

interface EquipmentList {
    [key: number]: EquipmentData;
}

export const Inventory = () => {
    const { characterInventory, handleSwapEquimentsPostions } = useInventory();

    return (
        <div className="mt-44 grid grid-cols-5 xl:grid-cols-10">
            {Array.from({ length: inventoryConfig.LIMIT_INVENTORY_SPACE }).map((_, index) => {
                return (
                    <InventorySquare
                        key={index}
                        squarePosition={index}
                        drop={handleSwapEquimentsPostions}
                        characterInventory={characterInventory}
                    />
                );
            })}
        </div>
    );
};
