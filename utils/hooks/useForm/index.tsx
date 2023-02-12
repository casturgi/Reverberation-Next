import { ChangeEvent, FormEvent, useState } from "react";

interface Validation {
    required?: {
        value: boolean;
        message: string;
    };
    pattern?: {
        value: string;
        message: string;
    };
    custom?: {
        isValid: (value: string) => boolean;
        message: string;
    };
}

type ErrorRecord<T> = Partial<Record<keyof T, string>>;
type Validations<T extends object> = Partial<Record<keyof T, Validation>>;

export * from "./custom_validations";

export const useForm = <
    T extends Record<keyof T, any> = Record<string, unknown>,
>(options?: {
    validations?: Validations<T>;
    initialValues?: Partial<T>;
    onSubmit?: () => void;
}): Record<string, any> => {
    const [data, setData] = useState<T>((options?.initialValues || {}) as T);
    const [errors, setErrors] = useState<ErrorRecord<T>>({});

    const handleChange =
        <S extends unknown>(key: keyof T, sanitizeFn?: (value: string) => S) =>
        (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
            const value = sanitizeFn
                ? sanitizeFn(e.target.value)
                : e.target.value;
            setData({
                ...data,
                [key]: value,
            });
        };

    const handleChangeRaw =
        <S extends unknown>(
            key: keyof T,
            sanitizeFn?: (value: Date | string | number) => S,
        ) =>
        (value: Date | string | number) => {
            const rawValue = sanitizeFn ? sanitizeFn(value) : value;
            setData({
                ...data,
                [key]: rawValue,
            });
        };

    const populateFormValues = (values: T) => {
        setData(values);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validations = options?.validations;
        if (validations) {
            let valid = true;
            const newErrors: ErrorRecord<T> = {};
            for (const key in validations) {
                const value = data[key];
                const validation = validations[key];

                if (validation?.required?.value && !value) {
                    valid = false;
                    newErrors[key] = validation?.required?.message;
                }

                const pattern = validation?.pattern;
                if (pattern?.value && !RegExp(pattern.value).test(value)) {
                    valid = false;
                    newErrors[key] = pattern.message;
                }

                const custom = validation?.custom;
                if (custom?.isValid && !custom.isValid(value)) {
                    valid = false;
                    newErrors[key] = custom.message;
                }
            }

            if (!valid) {
                setErrors(newErrors);
                return;
            }
        }

        setErrors({});

        if (options?.onSubmit) {
            options.onSubmit();
        }
    };

    return {
        data,
        handleChange,
        handleChangeRaw,
        handleSubmit,
        populateFormValues,
        errors,
    };
};
