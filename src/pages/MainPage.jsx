import React from 'react';
import { useHistory } from 'react-router';

import AppBar from '@material-ui/core/AppBar';

import RegisterLoginForm from '../components/RegisterLoginForm';

import styles from './MainPage.module.css';
import useAuthorizedAsync from '../lib/useAuthorizedAsync';

function MainPage() {
    const history = useHistory();
    const auth = useAuthorizedAsync();
    if (!auth.isLoading && auth.isAuthorized) {
        history.push("/graphs");
    }   

    const onRegisterSuccess = async (userData) => {
        history.push("/graphs");
    }

    const onLoginSuccess = async (userData) =>  { 
        localStorage.setItem("user", JSON.stringify(userData));
        history.push("/graphs");
    };

    return (
        <>
            <div className={styles.root}>
                <AppBar position="fixed" className={styles.appBar}>
                    <a href="/" className={styles.barLogo}>Graph App</a>
                </AppBar>  
                <main className={styles.content}>
                    <RegisterLoginForm className={styles.form} onLoginSuccess={onLoginSuccess} onRegisterSuccess={onRegisterSuccess} />
                </main>
            </div>
        </>
    );
}
/*
<div className={styles.demo}>
    <img className={styles.screenshot} alt="Graph app screenshot" src="https://mobiltelefon.ru/photo/february21/05/nothing_naznachila_anons_na_sleduuschuu_nedelu_i_otozvala_ego_picture2_0.jpg" />
    <p className={styles.screenshotCaption}>
        <b>Graph App</b> — интерактивный редактор графов, предназначенный для визуализации больших объёмов данных и исследования различных предметных областей.
    </p>
</div>
*/

export default MainPage;