import React from 'react';

import { CharacterCard } from '../../shared/components/Character';

export function HomePage() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2">
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
        </div>
    );
}
