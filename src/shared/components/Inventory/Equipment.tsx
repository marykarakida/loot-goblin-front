import React from 'react';
import { useDrag } from 'react-dnd';

import { useInventory } from '../../hooks';

import { EquipmentData } from './Inventory';

export const Equipment = ({ equipment, equipmentPosition }: { equipment: any; equipmentPosition: number }) => {
    const { selectEquipment } = useInventory();
    const [, drag] = useDrag(() => ({
        type: 'equipment',
        item: { equipmentId: equipment.equipment.id, equipmentPosition },
    }));

    return (
        <div
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={equipment.equipment.name}
            ref={drag}
            className="aspect-square w-full cursor-move select-none"
            onClick={() => {
                selectEquipment(equipment);
            }}
        >
            <img src={equipment.equipment.picture} alt={equipment.equipment.name} />
        </div>
    );
};
