import React from 'react';

export function Top() {
    return (
        <div className="absolute top-0 left-0 w-full">
            <div className="absolute top-0 left-0 w-full">
                <div className="absolute left-0">
                    <div>
                        <div className="absolute z-10 h-7 w-20 rounded-tl-sm border-2 border-yellow-500 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-500" />
                        <div className="absolute top-7 left-0 h-3 w-20 rounded-br-sm bg-yellow-400">
                            <div className="absolute top-1 left-1 z-10 h-3 w-3 rounded-md border-2 border-amber-600 bg-yellow-400" />
                        </div>
                    </div>
                    <div className="absolute top-10">
                        <div className="inverted-border-left inverted-border-radius absolute h-10 w-4 rounded-b-sm bg-yellow-400" />
                    </div>
                </div>
                <div className="absolute right-20 left-20 ">
                    <div className="absolute h-7 w-full border-2 border-amber-800 bg-amber-700" />
                    <div className="absolute top-7 h-2 w-full border-2 border-amber-700 bg-amber-600" />
                </div>
                <div className="absolute right-0">
                    <div>
                        <div className="absolute right-0 z-10 h-7 w-20 rounded-tr-sm border-2 border-yellow-500 bg-gradient-to-l from-yellow-400 via-yellow-500 to-yellow-500" />
                        <div className="absolute top-7 right-0 h-3 w-20 rounded-bl-sm bg-yellow-400">
                            <div className="absolute top-1 right-1 z-10 h-3 w-3 rounded-md border-2 border-amber-600 bg-yellow-400" />
                        </div>
                    </div>
                    <div>
                        <div className="inverted-border-right inverted-border-radius absolute right-0 top-10 h-10 w-4 rounded-b-sm bg-yellow-400" />
                    </div>
                </div>
            </div>
        </div>
    );
}
