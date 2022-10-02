import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { useSignUp } from '../../shared/hooks/api';

import { TextInput } from '../../shared/components/Input';

interface InputsFields {
    email: string;
    username: string;
    picture: string;
    password: string;
}

const textInputsConfigs = [
    {
        id: 1,
        name: 'email',
        type: 'text',
        placeholder: 'Email',
        errorMessage: 'Must be a valid email',
        required: true,
    },
    {
        id: 2,
        name: 'username',
        type: 'text',
        placeholder: 'Username',
        errorMessage: 'Must contain 3-24 character',
        required: true,
        minLength: 3,
        maxLength: 24,
    },
    {
        id: 3,
        name: 'picture',
        type: 'url',
        placeholder: 'Profile picture',
        errorMessage: 'Must be a valid url',
        required: true,
    },
    {
        id: 4,
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        errorMessage: 'Must contain 8-24 character',
        required: true,
        minLength: 8,
        maxLength: 24,
    },
];

export function SignUpPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputsFields>({
        defaultValues: { email: '', username: '', picture: '', password: '' },
        reValidateMode: 'onSubmit',
    });
    const { loading, createAccount } = useSignUp();

    const onSubmit = useCallback(async (data: InputsFields) => {
        try {
            await createAccount({ data });
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <div className="md:flex">
            <div className="flex items-center justify-center md:flex-1">
                <div className="h-80 w-80 bg-yellow-400">placeholder</div>
            </div>
            <div className="m-4 rounded-2xl bg-white px-10 py-14 md:flex-1">
                <h2 className="mb-8 text-center text-5xl font-bold tracking-wider text-yellow-400">Sign-up</h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                    {textInputsConfigs.map(({ id, ...input }) => (
                        <TextInput key={id} {...input} errors={errors} loading={loading} registerInput={register} />
                    ))}
                    <button
                        className="flex items-center justify-center rounded-md bg-yellow-400 px-6 py-2 text-lg font-medium shadow-sm hover:bg-yellow-500 disabled:bg-yellow-500"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? '...' : 'Register'}
                    </button>
                </form>
            </div>
        </div>
    );
}
