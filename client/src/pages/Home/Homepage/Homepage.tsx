import React from 'react';
import { AppBar, Button, Grid, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/menu';
import styled from 'styled-components';
import { ColorKeys, getColor, getTextColor, theme } from '@utils';
import Logo from '../Logo/Logo';
import { makeStyles } from '@material-ui/core/styles';

const ColorButton = styled(({ bgColor, ...rest }) => <Button {...rest} />)<{ bgColor: ColorKeys }>`
    &.MuiButton-contained {
        background-color: ${ props => getColor(props.bgColor)};
        color: ${props => getTextColor(props.bgColor)};
        margin: ${theme.spacing(1)}px;
        &:hover {
            opacity: 0.7;
        }
    }
`;

const useStyles = makeStyles({
    root: {
        backgroundColor: theme.palette.success.main,
        maxWidth: '100vw',
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    loginButton: {
        margin: '0 auto',
        [theme.breakpoints.up('sm')]:{
            margin: 0,
        }
    }
})

const Homepage = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" wrap="wrap">
                    <Grid item>
                        <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon fontSize="large"/>
                        </IconButton>
                        <Logo />
                        </Grid>
                    </Grid>
                    <Grid item className={classes.loginButton}>
                        <ColorButton variant="contained" bgColor="primary">Zaloguj</ColorButton>            
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Homepage;
/*
            <ColorButton variant="contained" bgColor="primary">Primary</ColorButton>
            <ColorButton variant="contained" bgColor="secondary">Secondary</ColorButton>
            <ColorButton variant="contained" bgColor="error">Error</ColorButton>
            <ColorButton variant="contained" bgColor="warning">Warning</ColorButton>
            <ColorButton variant="contained" bgColor="success">Success</ColorButton>
            <ColorButton variant="contained" bgColor="info">Info</ColorButton>
*/