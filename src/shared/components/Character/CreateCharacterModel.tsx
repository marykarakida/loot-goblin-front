import React from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface CreateCharacterModelProps {
    isModalOpen: boolean;
    toggleModal: () => void;
}

export function CreateCharacterModel({ isModalOpen, toggleModal }: CreateCharacterModelProps) {
    return (
        <Transition appear show={isModalOpen} as={React.Fragment}>
            <Dialog as="div" className="relative z-10 bg-black" onClose={toggleModal}>
                <div className="fixed inset-0 bg-black bg-opacity-25" />

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full justify-center p-2 text-center xl:p-4">
                        <Dialog.Panel className="w-full max-w-7xl transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all xl:rounded-2xl">
                            <div className="relative w-full">
                                <Dialog.Title
                                    as="h3"
                                    className="m-auto w-2/3 border-4 border-amber-400 py-2 text-center text-2xl font-medium tracking-widest text-amber-500 md:w-1/2 md:tracking-[15px]"
                                >
                                    CHARACTER
                                </Dialog.Title>

                                <div className="absolute top-2 right-2 h-8 w-8 cursor-pointer" onClick={toggleModal}>
                                    <svg className="stroke-yellow-400 stroke-[14px]" viewBox="0 0 100 100">
                                        <line x1="10" x2="90" y1="10" y2="90" />
                                        <line x1="10" x2="90" y1="90" y2="10" />
                                    </svg>
                                </div>
                            </div>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
                                    order.
                                </p>
                            </div>
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
