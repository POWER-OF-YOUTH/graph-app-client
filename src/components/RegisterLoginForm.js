import React from 'react';

import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

import API from '../lib/API';
import InvalidLoginOrPasswordError from '../lib/InvalidLoginOrPasswordError';
import UnexpectedError from '../lib/UnexpectedError';

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

function RegisterLoginForm({ className, onLoginSuccess, onLoginFailed, onRegisterSuccess, onRegisterFailed }) {
    const [showRegisterAlert, setShowRegisterAlert] = React.useState(false);
    const [registerAlertMessage, setRegisterAlertMessage] = React.useState("");
    const [showLoginAlert, setShowLoginAlert] = React.useState(false);
    const [loginAlertMessage, setLoginAlertMessage] = React.useState("");

    const [loginData, setLoginData] = React.useState({
        login: "",
        password: ""
    });
    const [registerData, setRegisterData] = React.useState({
        login: "",
        password: "",
        passwordRepeat: "",
        email: "",
        name: "",
        surname: "",
        patronymic: "",
        sex: "unknown"
    });

    const [currentTab, setCurrentTab] = React.useState(1);

    const clearStates = () => {
        setShowLoginAlert(false);
        setShowRegisterAlert(false);
        setLoginData({
            login: "",
            password: ""
        });
        setRegisterData({
            login: "",
            password: "",
            passwordRepeat: "",
            email: "",
            name: "",
            surname: "",
            patronymic: "",
            sex: "unknown"
        });
    }

    const handleTabChange = (evt, newValue) => {
        setCurrentTab(newValue);
        
        clearStates();
    };

    const handleRegisterChange = (evt) => {
        setShowRegisterAlert(false);
        const value = evt.target.value;
        setRegisterData({
            ...registerData,
            [evt.target.name]: value
        });
    }

    const handleLoginChange = (evt) => {
        setShowLoginAlert(false);
        const value = evt.target.value;
        setLoginData({
            ...loginData,
            [evt.target.name]: value
        });
    };

    const registerClick = () => {
        API.register(registerData)
        .then(userData => {
            localStorage.setItem("user", JSON.stringify(userData));

            setShowRegisterAlert(false);
            API.login({ login: registerData.login, password: registerData.password });
            onRegisterSuccess(userData);
        })
        .catch(err => {
            setRegisterAlertMessage(err.message);
            setShowRegisterAlert(true);
            onRegisterFailed(err);
        })
    };

    const loginClick = () => {
        if (loginData.login === "" || loginData.password === "") {
            setLoginAlertMessage("Все поля должны быть заполненны!")
            setShowLoginAlert(true);
            return;
        }
        API.login(loginData)
        .then(userData => {
            localStorage.setItem("user", JSON.stringify(userData));
            
            setShowLoginAlert(false);
            onLoginSuccess(userData);
        })
        .catch(err => {
            setLoginAlertMessage(err.message);
            setShowLoginAlert(true);
            onLoginFailed(err);
        });
    };

    return (
        <div className={className}>
            <div className={styles.container}>
                <Logo />
                <Tabs className={styles.actionTabs} value={currentTab} onChange={handleTabChange} variant="fullWidth" fixed>
                    <Tab label="Регистрация" />
                    <Tab label="Вход" />
                </Tabs>
                <TabPanel value={currentTab} index={0} className={styles.panelRegister}>
                    <div className={styles.registerFields}>
                        <TextField className={styles.field} error={showRegisterAlert} name="email" onChange={handleRegisterChange} variant="filled" type="text" label="Email" required />
                        <TextField className={styles.field} error={showRegisterAlert} name="login" onChange={handleRegisterChange} variant="filled" type="text" label="Логин" required />
                        <TextField className={styles.field} error={showRegisterAlert} name="surname" onChange={handleRegisterChange}variant="filled" type="text" label="Фамилия" required />
                        <TextField className={styles.field} error={showRegisterAlert} name="name" onChange={handleRegisterChange} variant="filled" type="text" label="Имя" required />
                        <TextField className={styles.field} error={showRegisterAlert} name="patronymic" onChange={handleRegisterChange} variant="filled" type="text" label="Отчество" required />
                        <TextField className={styles.field} error={showRegisterAlert} name="password" onChange={handleRegisterChange} variant="filled" type="password" label="Пароль" required />
                        <TextField className={styles.field} error={showRegisterAlert} name="passwordRepeat" onChange={handleRegisterChange} variant="filled" type="password" label="Повтор пороля" required />
                        { showRegisterAlert ? <Alert severity="error" variant="filled">{registerAlertMessage}</Alert> : <></> }
                    </div>
                    <Button className={styles.registerButton} onClick={registerClick}>Зарегистрироваться</Button>
                </TabPanel>
                <TabPanel value={currentTab} index={1} className={styles.panelLogin} onC>
                    <div className={styles.loginFields}>
                        <TextField className={styles.field} name="login" error={showLoginAlert} onChange={handleLoginChange} variant="filled" type="text" label="Логин" required />
                        <TextField className={styles.field} name="password" error={showLoginAlert} onChange={handleLoginChange} variant="filled" type="password" label="Пароль" required />
                        { showLoginAlert ? <Alert severity="error" variant="filled">{loginAlertMessage}</Alert> : <></> }
                    </div>
                    <Button className={styles.loginButton} onClick={loginClick}>Войти</Button>
                </TabPanel>
            </div>
        </div>
    )
}

RegisterLoginForm.propTypes = {
    className: PropTypes.string,
    onLoginSuccess: PropTypes.func,
    onLoginFailed: PropTypes.func,
    onRegisterSuccess: PropTypes.func,
    onRegisterFailed: PropTypes.func
};

RegisterLoginForm.defaultProps = {
    className: undefined,
    onLoginSuccess: f => f,
    onLoginFailed: f => f,
    onRegisterSuccess: f => f,
    onRegisterFailed: f => f
}

export default RegisterLoginForm;