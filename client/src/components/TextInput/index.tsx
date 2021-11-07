import React from 'react';
import {
    Controller,
    Control,
    Path,
    UnpackNestedValue,
    PathValue,
} from 'react-hook-form';
import { TextField } from '@material-ui/core';

type TextInputProps<T> = {
    label: string;
    name: Path<T>;
    control: Control<T, object>;
    defaultValue: UnpackNestedValue<PathValue<T, Path<T>>>;
    type?: string;
};

const TextInput = <T,>({
    label,
    type = 'text',
    name,
    control,
    defaultValue,
}: TextInputProps<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => (
                <TextField
                    margin="dense"
                    id={name}
                    label={label}
                    type={type}
                    fullWidth
                    {...field}
                />
            )}
        />
    );
};

export default TextInput;
