import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { UserLoginDto } from 'src/utils/sharedTypes';

type TextInputProps = {
    label: string;
    name: keyof UserLoginDto;
    control: Control<UserLoginDto, object>;
    type?: string;
};

const TextInput = ({ label, type = 'text', name, control }: TextInputProps) => {
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
