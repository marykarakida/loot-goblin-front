import React, { useCallback, useState } from 'react';

import { InventorySquare } from './InventorySquare';

export interface EquipmentData {
    id: string;
    text: string;
}

interface EquipmentList {
    [key: number]: EquipmentData;
}

export const Inventory = () => {
    const [list, setList] = useState<EquipmentList>({
        0: {
            id: 'first',
            text: 'First',
        },
        2: {
            id: 'second',
            text: 'Second',
        },
    });

    const dropItemToNewPosition = useCallback(
        (from: number, to: number) => {
            if (!!list[to]) {
                setList(({ [from]: equipmentBeignDrag, [to]: equipmentBeignSwapped, ...rest }) => ({
                    ...rest,
                    [from]: equipmentBeignSwapped,
                    [to]: equipmentBeignDrag,
                }));
            } else {
                setList(({ [from]: equipment, ...rest }) => ({ ...rest, [to]: equipment }));
            }
        },
        [list, setList]
    );

    return (
        <div className="grid w-1/2 grid-cols-5 gap-4">
            {Array.from({ length: 50 }).map((_, index) => {
                return <InventorySquare key={index} squarePosition={index} dropItemToNewPosition={dropItemToNewPosition} list={list} />;
            })}
        </div>
    );
};
