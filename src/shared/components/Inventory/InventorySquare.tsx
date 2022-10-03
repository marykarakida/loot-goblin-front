import React from 'react';
import { useDrop } from 'react-dnd';

import { Equipment } from './Equipment';
import { EquipmentData } from './Inventory';

export interface InventorySquareProps {
    list: { [key: number]: EquipmentData };
    squarePosition: number;
    dropItemToNewPosition: (from: number, to: number) => void;
}

interface DragItem {
    equipmentPosition: number;
}

export const InventorySquare = ({ squarePosition, list, dropItemToNewPosition }: InventorySquareProps) => {
    const [, dropBox] = useDrop(
        () => ({
            accept: 'equipment',
            drop: (item: DragItem) => dropItemToNewPosition(item.equipmentPosition, squarePosition),
        }),
        [dropItemToNewPosition, list]
    );

    return (
        <div className="m-5 flex h-10 w-10 items-center justify-center bg-blue-400 opacity-25" ref={dropBox}>
            {!!list[squarePosition] && <Equipment equipment={list[squarePosition]} equipmentPosition={squarePosition} />}
        </div>
    );
};
