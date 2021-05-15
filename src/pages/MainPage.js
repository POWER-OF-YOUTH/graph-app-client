import React from 'react';

import AppBar from '@material-ui/core/AppBar';

import RegisterLoginForm from '../components/RegisterLoginForm';

import styles from './MainPage.module.css';

function MainPage() {
    return (
        <>
            <div className={styles.root}>
                <AppBar position="fixed" className={styles.appBar}>
                    <a href="/" className={styles.barLogo}>Graph App</a>
                </AppBar>  
                <main className={styles.content}>
                    <div className={styles.demo}>
                        <img className={styles.screenshot} src="https://mobiltelefon.ru/photo/february21/05/nothing_naznachila_anons_na_sleduuschuu_nedelu_i_otozvala_ego_picture2_0.jpg" />
                        <p className={styles.screenshotCaption}>
                            <b>Graph App</b> — интерактивный редактор графов, предназначенный для визуализации больших объёмов данных и исследования различных предметных областей.
                        </p>
                    </div>
                    <RegisterLoginForm className={styles.form} />
                </main>
            </div>
        </>
    );
}

export default MainPage;