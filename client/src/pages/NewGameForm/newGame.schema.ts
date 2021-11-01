import * as yup from 'yup';

export const newGameSchema = yup.object().shape({
    storeName: yup
        .string()
        .required('Nazwa sklepu dla nowej gry jest wymagana!'),
});
