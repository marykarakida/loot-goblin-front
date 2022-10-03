import React from 'react';
import { useDrag } from 'react-dnd';

import { EquipmentData } from './Inventory';

export const Equipment = ({ equipment, equipmentPosition }: { equipment: EquipmentData; equipmentPosition: number }) => {
    const [, drag] = useDrag(() => ({
        type: 'equipment',
        item: { equipmentPosition },
    }));

    return (
        <div className="h-5 w-5 select-none bg-red-400" ref={drag}>
            <p className="text-slate-900">{equipment.text}</p>
        </div>
    );
};
