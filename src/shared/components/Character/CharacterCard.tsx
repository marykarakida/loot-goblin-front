import React from 'react';

export function CharacterCard() {
    return (
        <div className="character-card-pattern relative m-6 flex h-96 flex-col rounded-xl border-4 border-solid border-slate-800 p-4 drop-shadow-xl">
            <div className="absolute -top-1 left-0 right-0 h-3 bg-gray-700" />
            <div className="h-14"></div>
            <div className="relative flex-1 rounded-xl border-4 border-solid border-amber-800 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600">
                <div className="absolute top-2 left-2 h-3 w-3 rounded-full bg-amber-800" />
                <div className="absolute top-2 right-2 h-3 w-3 rounded-full bg-amber-800" />
                <div className="absolute bottom-2 right-2 h-3 w-3 rounded-full bg-amber-800" />
                <div className="absolute bottom-2 left-2 h-3 w-3 rounded-full bg-amber-800" />
                <div className="flex h-full flex-col items-center justify-center gap-4">
                    <svg
                        className="peer cursor-pointer fill-transparent stroke-amber-700 stroke-[6px] transition hover:stroke-amber-800 hover:stroke-[8px]"
                        viewBox="0 0 100 100"
                        width="160px"
                        height="160px"
                    >
                        <circle cx="50" cy="50" r="45" />
                        <line x1="50" y1="20" x2="50" y2="80" />
                        <line x1="20" y1="50" x2="80" y2="50" />
                    </svg>
                    <p className="text-4xl font-bold text-amber-700 peer-hover:tracking-wider peer-hover:text-amber-800">Add character</p>
                </div>
            </div>
        </div>
    );
}
