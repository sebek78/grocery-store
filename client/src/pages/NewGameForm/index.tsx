import React from 'react';
import { useAppSelector, useAppDispatch } from '@store';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { newGameRequest } from '@gameSlice';
import { ProgressButton, TextInput } from '@components';
import { NewGame, NewGameDTO } from '@sharedTypes';
import { newGameSchema } from './newGame.schema';
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from '@material-ui/core';

const NewGameForm = () => {
    const dispatch = useAppDispatch();
    const username = useAppSelector(({ user }) => user.username);
    const isRequesting = useAppSelector(({ game }) => game.isRequesting);
    const apiError = useAppSelector(({ game }) => game.error);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<NewGame>({
        resolver: yupResolver(newGameSchema),
    });

    const onSubmit: SubmitHandler<NewGameDTO> = ({ storeName, difficulty }) => {
        dispatch(
            newGameRequest({
                username,
                storeName,
                difficulty,
            })
        );
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {errors.storeName && <div>{errors.storeName.message}</div>}
            {apiError && <div>{apiError}</div>}
            <TextInput
                label="Nazwa sklepu"
                name="storeName"
                control={control}
                defaultValue=""
            />
            <FormControl component="fieldset">
                <FormLabel component="legend">poziom trudności gry</FormLabel>
                <Controller
                    name="difficulty"
                    control={control}
                    defaultValue="easy"
                    render={({ field }) => (
                        <RadioGroup {...field}>
                            <FormControlLabel
                                value="easy"
                                control={<Radio />}
                                label="łatwy"
                            />
                            <FormControlLabel
                                value="medium"
                                control={<Radio />}
                                label="średni"
                            />
                            <FormControlLabel
                                value="hard"
                                control={<Radio />}
                                label="trudny"
                            />
                        </RadioGroup>
                    )}
                />
            </FormControl>
            <ProgressButton
                isRequesting={isRequesting}
                label="Start"
                type="submit"
            />
        </form>
    );
};

export default NewGameForm;
