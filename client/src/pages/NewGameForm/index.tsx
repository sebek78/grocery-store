import React from 'react';
import { useAppSelector, useAppDispatch } from '@store';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { newGameRequest } from '@gameSlice';
import { ProgressButton, TextInput } from '@components';
import { NewGame, NewGameDTO } from '@sharedTypes';
import { newGameSchema } from './newGame.schema';
import StyledForm from './components/StyledForm';
import DifficultyLevel from './components/DifficultyLevel';
import { GameDifficulty } from '@sharedTypes';

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
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            {errors.storeName && <div>{errors.storeName.message}</div>}
            {apiError && <div>{apiError}</div>}
            <TextInput
                label="Nazwa sklepu"
                name="storeName"
                control={control}
                defaultValue=""
            />
            <DifficultyLevel
                legend="Poziom trudności gry"
                name="difficulty"
                control={control}
                defaultValue={GameDifficulty.Easy}
            />
            <ProgressButton
                isRequesting={isRequesting}
                label="Start"
                type="submit"
            />
        </StyledForm>
    );
};

export default NewGameForm;
