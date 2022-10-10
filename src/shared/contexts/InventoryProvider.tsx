import React, { createContext, useMemo } from 'react';

import { useInventory } from '../hooks/api';

interface IInventoryContextValues {
    characterInventory: any;
    selectedEquipment: any;
    handleSwapEquimentsPostions(equipmentId: string, initialPosition: number, finalPosition: number): Promise<void>;
    selectEquipment(equipment: any): void;
}

const defaultValues: IInventoryContextValues = {
    characterInventory: [],
    selectedEquipment: {},
    handleSwapEquimentsPostions: async () => {},
    selectEquipment: () => {},
};

const InventoryContext = createContext<IInventoryContextValues>(defaultValues);

export function InventoryProvider({ children }: { children: React.ReactNode }) {
    const { characterInventory, selectedEquipment, handleSwapEquimentsPostions, selectEquipment } = useInventory();

    const value = useMemo(
        () => ({ characterInventory, selectedEquipment, handleSwapEquimentsPostions, selectEquipment }),
        [characterInventory, selectedEquipment, handleSwapEquimentsPostions, selectEquipment]
    );

    return <InventoryContext.Provider value={value}>{children}</InventoryContext.Provider>;
}

export default InventoryContext;
