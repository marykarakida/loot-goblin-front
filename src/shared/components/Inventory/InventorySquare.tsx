import React from 'react';
import { useDrop } from 'react-dnd';

import { Equipment } from './Equipment';
import { EquipmentData } from './Inventory';

export interface InventorySquareProps {
    characterInventory: { [key: number]: any };
    squarePosition: number;
    drop: (equipmentId: string, initialPosition: number, finalPosition: number) => void;
}

interface DragItem {
    equipmentId: string;
    equipmentPosition: number;
}

export const InventorySquare = ({ squarePosition, characterInventory = {}, drop }: InventorySquareProps) => {
    const [, dropBox] = useDrop(
        () => ({
            accept: 'equipment',
            drop: ({ equipmentId, equipmentPosition }: DragItem) => drop(equipmentId, equipmentPosition, squarePosition),
        }),
        [drop, characterInventory]
    );

    return (
        <div className="flex aspect-square w-full items-center justify-center border-2 border-black bg-amber-200 p-2" ref={dropBox}>
            {!!characterInventory[squarePosition] && (
                <Equipment equipment={characterInventory[squarePosition]} equipmentPosition={squarePosition} />
            )}
        </div>
    );
};
