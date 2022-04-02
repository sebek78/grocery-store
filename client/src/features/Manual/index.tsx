import React from 'react';
import { Grid } from '@mui/material';
import ManualHeader from './components/ManualHeader';
import ManualSubtitle from './components/ManualSubtitle';
import ManualParagraph from './components/ManualParagraph';
import { TextLink } from '@components';
import ManualParagraphSubtitle from './components/ManualParagraphSubtitle';
import ManualDefinition from './components/ManualDefinition';

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
                ).{' '}
                <ManualDefinition>
                    Twoim celem jest zarobić jak najwięcej pieniędzy
                </ManualDefinition>
                (w okresie próbnym na stanowisko kierownika sklepu) w ciągu
                sześciu dni. Po tym czasie gra kończy się i zliczany jest
                wypracowany wynik oraz wystawiona jest ogólna ocena. Jeśli
                kiedykolwiek podczas gry nie będziesz miał pieniędzy to
                przegrasz.
            </ManualParagraph>
            <ManualParagraph>
                Każdy dzień składa się z pięciu etapów:
                <ManualDefinition>
                    planowanie, dostawa, magazynowanie, sprzedaż i sprzątanie
                </ManualDefinition>
                . Podczas planowania przygotujesz sobie listę towarów do
                zakupienia. W etapie dostawy zamówisz produkty do sklepu z
                Centrum Dystrybucji Wielkiej Sieci. Ale zamawiaj mądrze, bo ceny
                towarów zmieniają się codziennie. W sklepie będziesz sprzedawał
                pięć rodzajów produktów i będą to: warzywa i owoce, pieczywo,
                nabiał, produkty pakowane (makarony, konserwy, itp.) oraz
                mrożonki. Następnie zamówione rzeczy trafią do magazynu sklepu i
                Twoim zadaniem będzie przełożenie części towaru do obszaru
                sprzedaży oraz możesz zdecydować o obniżce ceny na wybrany typ
                produktu.
            </ManualParagraph>
            <ManualParagraph>
                W kolejnym etapie otwierasz sklep i codzienie odwiedza Cię
                pięciu klientów. Każdy z nich coś sobie kupi. Jeśli klient nie
                znajdzie towaru po który przyszedł to zezłości się i będziesz
                miał problem. Pod koniec dnia po zamknięciu sklepu dla klientów
                trzeba będzie wyrzucić produkty, którym skończył się termin
                ważności.
            </ManualParagraph>
            <ManualSubtitle>Nowa gra</ManualSubtitle>
            <ManualParagraph>
                Po zarejestrowaniu się i pierwszym zalogowaniu do gry zobaczysz
                pustą listę gier.{' '}
                <ManualDefinition>Kliknij przycisk "Nowa gra"</ManualDefinition>
                , aby utowrzyć nową grę. Pojawi się formularz do wypełnienia,
                gdzie należy podać wymyśloną nazwę sklepu i wybrać
                <ManualDefinition>poziom trudności</ManualDefinition>. Łatwy
                poziom trudności oznacza, że rozpoczynasz grę z 30 monetami
                (jednostka pieniędzy w grze). Przy średnim poziomie trudności
                gracz rozpoczyna grę z 15 monetami, a przy trudnym poziomie kasa
                jest pusta i trzeba bardzo uważać by nie zbankrutować.
            </ManualParagraph>
            <ManualParagraph>
                Jeśli masz już grę na liście, która nie jest zakończona. To
                możesz klinąć przycisk "Kontynuuj", aby wrócić do gry.
            </ManualParagraph>
            <ManualSubtitle>Planowanie</ManualSubtitle>
            <ManualParagraphSubtitle>
                Informacja o sklepie
            </ManualParagraphSubtitle>
            <ManualParagraph>
                Planowanie jest pierwszym etapem każdego dnia. Na widoku sklepu
                obok nazwy sklepu widzisz ilość gotówki w kasie sklepu. Jeśli ta
                wartość spadnie poniżej zera to oznacza
                <ManualDefinition>bankructwo</ManualDefinition> i gra skończy
                się automatycznie przed czasem. Dalej obok informacji o stanie
                kasy jest informacja o tym który jest dzień i jaki jest etap w
                ciągu dnia. Znajduje się tam też przycisk do przejścia do
                kolejnego etapu dnia.
            </ManualParagraph>
            <ManualParagraphSubtitle>Widok sklepu</ManualParagraphSubtitle>
            <ManualParagraph>
                Widok sklepu dzieli się na trzy sekcje: klienci, sala sprzedaży
                i magazyn sklepu.
            </ManualParagraph>
            <ManualParagraph>
                Każdego dnia Twój sklep odwiedza 5 klientów. Dwóch z nich to są
                <ManualDefinition>stali klienci</ManualDefinition>, o któych
                wiadomo kiedy przyjdą i co kupią. Na karcie klienta zobaczysz
                jego/jej imię oraz listę produktów, które klient zamierza kupić.
                To trochę ułatwi trochę zaplanowanie zakupów, których dokonasz w
                kolejnym etapie gry. Niektórzy klienci posiadają jedną lub
                więcej <ManualDefinition>kart rabatowych</ManualDefinition>.
                Użycie tej karty sprawia, że klient zapłaci mniej o dwie monety
                za swoje zakupy.
            </ManualParagraph>
            <ManualParagraph>
                Należy dobrze
                <ManualDefinition>zaplanować zaopatrzenie</ManualDefinition>
                sklepu. Jeśli klient nie kupi wszystkich produktów z listy, to w
                trakcie zakpuów zrezygnuje z nich i porzuci koszyk w sklepie.
                Oznacza to, że towar z tego koszyka zostanie
                <ManualDefinition>wyrzucony do śmieci</ManualDefinition>
                (to symuluje uszkodzone, otwarte lub rozmrożone artykuły). Taki
                klient napiszę też skargę na nasz sklep do centrali i trzeba
                będzie zapłacić niewielką
                <ManualDefinition>karę finansową</ManualDefinition>. Czasami
                klient, który kupi wszystko z listy i będzie zachwycony obsługą
                również napisze email do centrali i sklep otrzyma
                <ManualDefinition>premię do sprzedaży</ManualDefinition>.
                Wysokości kar i premii są ukryte przed graczem.
            </ManualParagraph>
            <ManualParagraph>
                Na widoku <ManualDefinition>sali sprzedaży</ManualDefinition>
                jest informacja o
                <ManualDefinition>pojemności pomieszczenia</ManualDefinition>,
                czyli ilości miejsca na regałach na produkty. Możesz mieć
                dowolną ilość produktów jednego typu na każdym regale, ale cała
                sala sprzedaży mieści jedynie 15 produktów.
                <ManualDefinition>Magazyn sklepu</ManualDefinition>
                mieści maksymalnie 20 produktów.
            </ManualParagraph>
            <ManualParagraph>
                <ManualDefinition>Produkt</ManualDefinition> w prawym górnym
                rogu posiada cyfrę, któa oznacza
                <ManualDefinition>termin ważności do spożycia</ManualDefinition>
                produktu. Liczba jeden oznacza, że produkt ma tylko jeden dzień
                ważności i jeśli się nie sprzeda w dniu dzisiejszym to pod
                koniec dnia zostanie wyrzucony do śmieci. Mrożonki nie posiadają
                terminu ważności i mogą być przechwoywane przez całą długość gry
                w sklepie lub magazynie.
            </ManualParagraph>
        </Grid>
    );
};

export default Manual;
