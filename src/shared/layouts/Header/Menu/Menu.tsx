import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';

export function Menu() {
    return (
        <>
            <div className="hidden items-center justify-end md:flex md:flex-1">
                <Link to="/sign-in" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Sign in
                </Link>
                <Link
                    to="/sign-up"
                    className="ml-8 inline-flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-base font-medium shadow-sm hover:bg-yellow-600"
                >
                    Sign up
                </Link>
            </div>

            <Popover className="h-10 md:hidden">
                {({ close }) => (
                    <>
                        <Popover.Button className="flex items-center justify-center rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                            <svg className="fill-yellow-400" viewBox="0 0 100 80" width="40" height="40">
                                <rect y="5" width="100" height="10" rx="8" />
                                <rect y="35" width="100" height="10" rx="8" />
                                <rect y="65" width="100" height="10" rx="8" />
                            </svg>
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="duration-200 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel className="absolute top-0 left-0 z-10 w-full p-2 md:hidden">
                                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="space-y-6 py-6 px-5">
                                        <div className="flex items-center justify-between">
                                            <h1>Loot Goblin</h1>
                                            <Popover.Button className="flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                                                <svg viewBox="0 0 100 100" width="30" height="30">
                                                    <line className="stroke-yellow-400 stroke-[14px]" x1="10" x2="90" y1="10" y2="90" />
                                                    <line className="stroke-yellow-400 stroke-[14px]" x1="10" x2="90" y1="90" y2="10" />
                                                </svg>
                                            </Popover.Button>
                                        </div>
                                        <div>
                                            <Link
                                                to="/sign-up"
                                                onClick={close}
                                                className="flex w-full items-center justify-center rounded-md border bg-yellow-400 px-4 py-2 text-base font-medium  shadow-sm hover:bg-yellow-500"
                                            >
                                                Sign up
                                            </Link>
                                            <p className="mt-6 text-center text-base font-medium text-gray-500">
                                                <span>Already have an account? </span>
                                                <Link to="/sign-in" onClick={close} className="text-yellow-400 hover:text-yellow-500">
                                                    Sign in
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </>
    );
}
