import React from 'react';
import { Grid } from '@mui/material';
import ManualHeader from './components/ManualHeader';
import ManualSubtitle from './components/ManualSubtitle';
import ManualParagraph from './components/ManualParagraph';
import { TextLink } from '@components';

const Manual = () => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            sx={{
                px: {
                    xs: 2,
                    sm: 4,
                    md: 8,
                },
                maxWidth: 900,
                marginX: 'auto',
            }}
        >
            <ManualHeader />
            <ManualSubtitle>Wprowadzenie</ManualSubtitle>
            <ManualParagraph>
                "Sklepikarz" to jest bardzo prosta gra ekonomiczna dla
                pojedynczego gracza, w której jesteś właścicielem małego sklepu
                w dużej sieci handlowej (jest to{' '}
                <TextLink
                    href="https://pl.wikipedia.org/wiki/Franczyza"
                    label="franczyza"
                />
                ). Twoim celem jest zarobić jak najwięcej pieniędzy w ciągu
                sześciu dni. Po tym czasie gra kończy się i zliczany jest
                wypracowany wynik oraz wystawiona jest ogólna ocena. Jeśli
                kiedykolwiek podczas gry nie będziesz miał pieniędzy to
                przegrasz.
            </ManualParagraph>
            <ManualParagraph>
                Każdy dzień składa się z pięciu etapów: planowanie, dostawa,
                magazynowanie, sprzedaż i sprzątanie. Podczas planowania
                przygotujesz sobie listę towarów do zakupienia. W etapie dostawy
                zamówisz produkty do sklepu z Centrum Dystrybucji Wielkiej
                Sieci. Ale zamawiaj mądrze, bo ceny towarów zmieniają się
                codziennie. W sklepie będziesz sprzedawał pięć rodzajów
                produktów i będą to: warzywa i owoce, pieczywo, nabiał, produkty
                pakowane (makarony, konserwy, itp.) oraz mrożonki. Następnie
                zamówione rzeczy trafią do magazynu sklepu i Twoim zadaniem
                będzie przełożenie części towaru do obszaru sprzedaży oraz
                możesz zdecydować o obniżce ceny na wybrany typ produktu.
            </ManualParagraph>
            <ManualParagraph>
                W kolejnym etapie otwierasz sklep i codzienie odwiedza Cię
                pięciu klientów. Każdy z nich coś sobie kupi. Jeśli klient nie
                znajdzie towaru po który przyszedł to zezłości się i będziesz
                miał problem. Pod koniec dnia po zamknięciu sklepu dla klientów
                trzeba będzie wyrzucić produkty, którym skończył się termin
                ważności.
            </ManualParagraph>
            <ManualSubtitle>Planowanie</ManualSubtitle>
        </Grid>
    );
};

export default Manual;
