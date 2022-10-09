import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';

import { useAuth } from '../../../hooks';

export function Menu() {
    const { auth, finishSession } = useAuth();

    return (
        <>
            <div className="hidden items-center justify-end md:flex md:flex-1">
                {auth?.accessToken ? (
                    <>
                        <Link
                            to="/home"
                            className="flex -m-3 items-center rounded-md p-3 text-base font-medium text-gray-700 hover:text-gray-900"
                        >
                            Characters
                        </Link>
                        <Link
                            to="/"
                            onClick={finishSession}
                            className="ml-8 inline-flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-base font-medium shadow-sm hover:bg-yellow-600"
                        >
                            Log out
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/sign-in" className="text-base font-medium text-gray-700 hover:text-gray-900">
                            Sign in
                        </Link>
                        <Link
                            to="/sign-up"
                            className="ml-8 inline-flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-base font-medium shadow-sm hover:bg-yellow-600"
                        >
                            Sign up
                        </Link>
                    </>
                )}
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
                                    <div className="space-y-6 py-3 px-5">
                                        <div className="flex items-center justify-end">
                                            <Popover.Button className="flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                                                <svg viewBox="0 0 100 100" width="30" height="30">
                                                    <line className="stroke-yellow-400 stroke-[14px]" x1="10" x2="90" y1="10" y2="90" />
                                                    <line className="stroke-yellow-400 stroke-[14px]" x1="10" x2="90" y1="90" y2="10" />
                                                </svg>
                                            </Popover.Button>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            {auth?.accessToken ? (
                                                <>
                                                    <Link
                                                        to="/home"
                                                        className="flex items-center gap-3 rounded-md p-3 text-base font-medium text-gray-700 hover:text-gray-900"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke-width="1.5"
                                                            stroke="currentColor"
                                                            className="h-6 w-6"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                                                            />
                                                        </svg>
                                                        Characters
                                                    </Link>
                                                    <Link
                                                        to="/"
                                                        onClick={() => {
                                                            finishSession();
                                                            close();
                                                        }}
                                                        className="flex w-full items-center justify-center rounded-md border bg-yellow-400 px-4 py-2 text-base font-medium  shadow-sm hover:bg-yellow-500"
                                                    >
                                                        Log out
                                                    </Link>
                                                </>
                                            ) : (
                                                <>
                                                    <Link
                                                        to="/sign-up"
                                                        onClick={close}
                                                        className="flex w-full items-center justify-center rounded-md border bg-yellow-400 px-4 py-2 text-base font-medium  shadow-sm hover:bg-yellow-500"
                                                    >
                                                        Sign up
                                                    </Link>
                                                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                                                        <span>Already have an account? </span>
                                                        <Link
                                                            to="/sign-in"
                                                            onClick={close}
                                                            className="text-yellow-400 hover:text-yellow-500"
                                                        >
                                                            Sign in
                                                        </Link>
                                                    </p>
                                                </>
                                            )}
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
