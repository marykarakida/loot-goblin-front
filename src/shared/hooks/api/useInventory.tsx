import React, { useCallback, useEffect, useState } from 'react';

import { useAxiosHook } from '../useAxioHook';
import { useRouter } from '../useRouter';

export function useInventory() {
    const { query } = useRouter();
    const { useAxios } = useAxiosHook(true);

    const [characterInventory, setCharacterInventory] = useState<any>({});
    const [selectedEquipment, setSelectedEquipment] = useState<any>({});

    const [{ data }, getCharacterInventory] = useAxios({ method: 'GET', url: `/inventories/${query.id}` });

    const [, swapEquipmentPositions] = useAxios({ method: 'PUT', url: `/inventories/${query.id}/equipments/position` }, { manual: true });

    useEffect(() => {
        if (data) {
            setCharacterInventory(data);
        }
    }, [data]);

    const handleSwapEquimentsPostions = useCallback(async (equipmentId: string, initialPosition: number, finalPosition: number) => {
        if (!!characterInventory[finalPosition]) {
            setCharacterInventory(({ [initialPosition]: equipmentBeignDrag, [finalPosition]: equipmentBeignSwapped, ...rest }) => ({
                ...rest,
                [initialPosition]: equipmentBeignSwapped,
                [finalPosition]: equipmentBeignDrag,
            }));
        } else {
            setCharacterInventory(({ [initialPosition]: equipment, ...rest }) => ({ ...rest, [finalPosition]: equipment }));
        }

        try {
            await swapEquipmentPositions({ data: { equipmentId, initialPosition, finalPosition } });
            await getCharacterInventory();
        } catch (err) {
            console.log(err);
        }
    }, []);

    const selectEquipment = (equipment: any) => {
        setSelectedEquipment(equipment);
    };

    return { characterInventory, handleSwapEquimentsPostions, selectEquipment, selectedEquipment };
}
