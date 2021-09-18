import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { RegisterUserDto } from '../../../../../../utils/sharedTypes';

type TextInputProps<T> = {
    label: string;
    name: keyof T;
    control: Control<T, object>;
    type?: string;
};

const TextInput = ({
    label,
    type = 'text',
    name,
    control,
}: TextInputProps<RegisterUserDto>) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
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
