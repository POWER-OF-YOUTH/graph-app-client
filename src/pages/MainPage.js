import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography } from '@material-ui/core/';

import RegisterLoginForm from '../components/RegisterLoginForm';

const useStyles = makeStyles((theme) => ({
    root: { 
        paddingTop: "40px",
        backgroundImage: "url(https://psv4.userapi.com/c520036/u76983384/docs/d12/1a3651a8e1df/41589-2-graphic-elements-png-image-high-quality.png?extra=t_YROjFz7F1F5vELCnEdd5mBl3zhF59BfBUufV3B62HT4Te8FMe-Wv36S3TXVeqo5I4EGp3t_bCjhaYCSHL5Rotk5aZKQw2lJdwYq3cNE5XVuS0icbC5ySNwmOhPgBi0rHXQ9eZ7c9IxEEcRHAO8Xw)",
        backgroundSize: "cover"
    },
    appBar: {
        height: "40px"
    },
    barLogo: {
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
        gridTemplateColumns: "100px 2fr 1fr 100px", // 150px 1fr 350px 150px
        gridTemplateAreas: "'a b c d'",
        justifyContent: "center",
        alignContent: "center",
        height: "100vh"
    },
    form: {
        gridArea: "c",
        margin: "0 auto"
    },
    demo: {
        gridArea: "b",
        alignSelf: "center",
        margin: "0 auto"
    },
    screenshot: {
        display: "block",
        width: "640px",
        height: "360px",
        border: "solid 2px",
        borderColor: "black",
        margin: "0 auto"
    },
    screenshotCaption: {
        textAlign: "center",
        maxWidth: "640px",
        minWidth: "360px"
    }
}));

function MainPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <header>
                <AppBar position="fixed" className={classes.appBar}>
                    <a href="/" className={classes.barLogo}>Graph App</a>
                </AppBar>  
            </header> 
            <main className={classes.content}>
                <div className={classes.demo}>
                    <img className={classes.screenshot} src="https://mobiltelefon.ru/photo/february21/05/nothing_naznachila_anons_na_sleduuschuu_nedelu_i_otozvala_ego_picture2_0.jpg" />
                    <p className={classes.screenshotCaption}>
                        <b>Graph App</b> — интерактивный редактор графов, предназначенный для визуализации больших объёмов данных и исследования различных предметных областей.
                    </p>
                </div>
                <RegisterLoginForm className={classes.form} />
            </main>
        </div>
    );
}

export default MainPage;