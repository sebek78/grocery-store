import styled from 'styled-components';
import { GameDifficulty } from '@sharedTypes';
import {
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@material-ui/core';
import React from 'react';
import {
    Control,
    Controller,
    Path,
    PathValue,
    UnpackNestedValue,
} from 'react-hook-form';

type DifficultyLevelProps<T> = {
    legend: string;
    name: Path<T>;
    control: Control<T, object>;
    defaultValue: UnpackNestedValue<PathValue<T, Path<T>>>;
};

const Wrapper = styled.div`
    margin: 24px auto;
`;

const DifficultyLevel = <T,>({
    legend,
    name,
    control,
    defaultValue,
}: DifficultyLevelProps<T>) => {
    return (
        <Wrapper>
            <FormControl component="fieldset">
                <FormLabel component="legend">{legend}</FormLabel>
                <Controller
                    name={name}
                    control={control}
                    defaultValue={defaultValue}
                    render={({ field }) => (
                        <RadioGroup {...field}>
                            <FormControlLabel
                                value={GameDifficulty.Easy}
                                control={<Radio />}
                                label="Łatwy"
                            />
                            <FormControlLabel
                                value={GameDifficulty.Medium}
                                control={<Radio />}
                                label="Średni"
                            />
                            <FormControlLabel
                                value={GameDifficulty.Hard}
                                control={<Radio />}
                                label="Trudny"
                            />
                        </RadioGroup>
                    )}
                />
            </FormControl>
        </Wrapper>
    );
};

export default DifficultyLevel;
