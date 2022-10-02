import React, { useState } from 'react';
import { UseFormRegister, FieldErrorsImpl } from 'react-hook-form';

interface TextInput {
    name: string;
    type: string;
    placeholder: string;
    errorMessage: string;
    required: boolean;
    minLength?: number;
    maxLength?: number;
    registerInput: UseFormRegister<any>;
    errors: FieldErrorsImpl<any>;
    loading: boolean;
}

export function TextInput(props: TextInput) {
    const { name, type, placeholder, errors, errorMessage, registerInput, loading, ...inputOptions } = props;

    return (
        <div className="relative w-full">
            <label className="m-1 uppercase">{name}</label>
            <input
                className="peer w-full rounded-xl border-2 border-yellow-400 py-2 px-3 outline-none transition"
                type={type}
                placeholder={placeholder}
                disabled={loading}
                {...registerInput(name, inputOptions)}
            />
            {errors?.[name] && <p className="m-1">{errorMessage}</p>}
        </div>
    );
}
