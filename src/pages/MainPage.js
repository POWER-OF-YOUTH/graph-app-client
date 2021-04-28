import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography } from '@material-ui/core/';

import RegisterLoginForm from '../components/RegisterLoginForm';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: "50px"
    },
    appBar: {
        height: "50px"
    },
    content: {
        padding: theme.spacing(3),
    },
    logo: {
        textDecoration: "none",
        fontFamily: "Montserrat, serif",
        fontSize: "15pt",
        fontWeight: "bold",
        color: "white",
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: "20px"
    }
}));

function MainPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <header>
                <AppBar position="fixed" className={classes.appBar}>
                    <a href="/" className={classes.logo}>Graph App</a>
                </AppBar>  
            </header> 
            <main>
                <RegisterLoginForm />
            </main>
        </div>
    );
}

export default MainPage;