import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    username: yup
        .string()
        .required('Nazwa użytkownika jest wymagana!')
        .min(8, 'Nazwa użytkowniak musi mieć 8 lub więcej znaków!'),
    password: yup
        .string()
        .required('Hasło jest wymagane!')
        .min(8, 'Hasło  musi mieć 8 lub więcej znaków!'),
    password2: yup
        .string()
        .required('Powtórzone  hasło jest wymagane!')
        .min(8, 'Hasło  musi mieć 8 lub więcej znaków!')
        .oneOf([yup.ref('password'), null], 'Oba hasła są różne!'),
});
