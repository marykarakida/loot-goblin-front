import React from 'react';

import { useInventory } from '../../hooks';

export function EquipmentDetail() {
    const { selectedEquipment } = useInventory();

    return (
        <div className="flex flex-grow gap-6 bg-amber-400 p-4">
            <img src={selectedEquipment?.equipment?.picture} alt="" className="aspect-square h-full" />
            <div>
                <h3 className="text-4xl">{selectedEquipment?.equipment?.name}</h3>
            </div>
        </div>
    );
}
