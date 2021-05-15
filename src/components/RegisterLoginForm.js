import React from 'react';

import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

import TabPanel from "./TabPanel";

import styles from './RegisterLoginForm.module.css';

function Logo() {
    return (
        <>
            <div className={styles.logo}>
                <p className={styles.logoName}>Graph App</p>
                <p className={styles.logoCaption}>Редактирование графов в реальном времени</p>
            </div>
        </>
    );
}

function RegisterLoginForm({ className, onLogin, onRegister }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function register() { 
        console.log("Register!");
    }

    function login() { 
        console.log("Login!");
    }

    return (
        <div className={className}>
            <div className={styles.container}>
                <Logo />
                <Tabs className={styles.actionTabs} value={value} onChange={handleChange} variant="fullWidth" fixed>
                    <Tab label="Регистрация" />
                    <Tab label="Вход" />
                </Tabs>
                <TabPanel value={value} index={0} className={styles.panelRegister}>
                    <div className={styles.registerFields}>
                        <TextField className={styles.field} variant="filled" type="text" label="Email" required />
                        <TextField className={styles.field} variant="filled" type="text" label="Логин" required />
                        <TextField className={styles.field} variant="filled" type="text" label="Фамилия" required />
                        <TextField className={styles.field} variant="filled" type="text" label="Имя" required />
                        <TextField className={styles.field} variant="filled" type="text" label="Отчество" required />
                        <TextField className={styles.field} variant="filled" type="password" label="Пароль" required />
                        <TextField className={styles.field} variant="filled" type="password" label="Повтор пороля" required />
                    </div>
                    <Button className={styles.registerButton} onClick={register}>Зарегистрироваться</Button>
                </TabPanel>
                <TabPanel value={value} index={1} className={styles.panelLogin}>
                    <div className={styles.loginFields}>
                        <TextField className={styles.field} variant="filled" type="text" label="Логин" required />
                        <TextField className={styles.field} variant="filled" type="password" label="Пароль" required />
                    </div>
                    <Button className={styles.loginButton} onClick={login}>Войти</Button>
                </TabPanel>
            </div>
        </div>
    )
}

RegisterLoginForm.propTypes = {
    className: PropTypes.string,
    onLogin: PropTypes.func,
    onRegister: PropTypes.func
};

RegisterLoginForm.defaultProps = {
    className: undefined,
    onLogin: f => f,
    onRegister: f => f
}

export default RegisterLoginForm;