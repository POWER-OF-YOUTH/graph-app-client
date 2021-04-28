import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography } from '@material-ui/core/';

import RegisterLoginForm from '../components/RegisterLoginForm';

const useStyles = makeStyles((theme) => ({
    root: { 
        paddingTop: "40px"
    },
    appBar: {
        height: "40px"
    },
    logo: {
        textDecoration: "none",
        fontFamily: "Montserrat, sans-serif",
        fontSize: "18px",
        fontWeight: "bold",
        color: "white",
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: "20px"
    },
    content: {
        display: "grid",
        gridTemplateColumns: "150px 1fr 350px 150px",
        gridTemplateAreas: "'a b c d'",
        justifyContent: "center",
        alignContent: "center",
        height: "100vh"
    },
    form: {
        gridArea: "c",
        margin: "0 auto"
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
            <main className={classes.content}>
                <RegisterLoginForm className={classes.form} />
            </main>
        </div>
    );
}

export default MainPage;