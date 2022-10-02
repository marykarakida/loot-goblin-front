import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { useAuth, useRouter } from '../../shared/hooks';
import { useSignIn } from '../../shared/hooks/api';

import { TextInput } from '../../shared/components/Input';

interface InputsFields {
    email: string;
    password: string;
}

const textInputsConfigs = [
    {
        id: 1,
        name: 'email',
        type: 'text',
        placeholder: 'Email',
        errorMessage: 'Must not be empty',
        required: true,
    },
    {
        id: 2,
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        errorMessage: 'Must not be empty',
        required: true,
    },
];

export function SignInPage() {
    const { createSession } = useAuth();
    const { navigate, location } = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputsFields>({
        defaultValues: { email: '', password: '' },
        reValidateMode: 'onSubmit',
    });
    const { loading, loginToAccount } = useSignIn();

    const onSubmit = useCallback(async (data: InputsFields) => {
        try {
            const { data: userData } = await loginToAccount({ data });
            createSession(userData);

            const to = location.state?.from?.pathname || '/';
            navigate(to, { replace: true });
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
                <h2 className="mb-8 text-center text-5xl font-bold tracking-wider text-yellow-400">Sign-in</h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                    {textInputsConfigs.map(({ id, ...input }) => (
                        <TextInput key={id} {...input} errors={errors} loading={loading} registerInput={register} />
                    ))}
                    <button
                        className="flex items-center justify-center rounded-md bg-yellow-400 px-6 py-2 text-lg font-medium shadow-sm hover:bg-yellow-500 disabled:bg-yellow-500"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? '...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
}
