import React, { useState } from 'react';

import { CharacterCard, CreateCharacterModel } from '../../shared/components/Character';

interface CharacterData {}

interface CaracterList {}

export function HomePage() {
    const [userCharacters, setUserCharacters] = useState([]);

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
                <CharacterCard character={userCharacters[index] ? '' : null} />
            ))}
        </div>
    );
}
