import { IMenuLink } from '@sharedTypes';
import { userLogoutRequest } from '@userSlice';

export const gameViewMenuLinks: IMenuLink[] = [
    { to: '/game/new', label: 'Nowa gra' },
    { to: '/game/manual', label: 'Podręcznik' },
    { to: '/game/account', label: 'Konto' },
    {
        label: 'Wyloguj',
        action: userLogoutRequest,
    },
];