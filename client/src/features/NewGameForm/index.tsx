import React from 'react';
import { useAppSelector, useAppDispatch } from '@store';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { newGameRequest } from '@gameSlice';
import { CloseIconButton, ProgressButton, TextInput } from '@components';
import { NewGame, NewGameDTO, GameDifficulty } from '@sharedTypes';
import { newGameSchema } from './newGame.schema';
import StyledForm from './components/StyledForm';
import DifficultyLevel from './components/DifficultyLevel';
import styled from 'styled-components';
import { DialogTitle, Grid } from '@mui/material';

const ErrorDiv = styled.div`
    color: red;
`;

const NewGame = () => {
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

    const closeForm = () => {
        history.back();
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle id="form-dialog-title" sx={{ p: 0, width: 1 }}>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ width: 1 }}
                >
                    <Grid item>Podaj nazwę sklepu</Grid>
                    <CloseIconButton handleClose={closeForm} />
                </Grid>
            </DialogTitle>
            {errors.storeName && (
                <ErrorDiv>{errors.storeName.message}</ErrorDiv>
            )}
            {apiError && <ErrorDiv>{apiError}</ErrorDiv>}
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

export default NewGame;
