import { useContext } from 'react';
import InventoryContext from '../contexts/InventoryProvider';

export function useInventory() {
    return useContext(InventoryContext);
}
