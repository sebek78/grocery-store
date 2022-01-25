import { Box } from '@mui/system';
import React from 'react';

const Introduction = () => {
    return (
        <Box
            sx={{
                mx: 4,
                maxWidth: '600px',
            }}
        >
            <strong>Sklepikarz</strong> jest prostą grą ekonomiczną dla
            pojedynczego gracza, w której zarządzasz małym sklepem pod szyldem
            dużej sieci handlowej. Kupujesz towar, układasz go na regałach,
            sprzedajesz i na koniec dnia sprzątasz swój sklep. Twoim celem jest
            zarobić jak najwięcej w ciągu 6 dni.
        </Box>
    );
};

export default Introduction;
