import React from 'react';
import validator from 'validator';

import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

import API from '../lib/API';

import TabPanel from "./TabPanel";

import styles from './RegisterLoginForm.module.css';

const propTypes = {
    className: PropTypes.string,
    onLoginSuccess: PropTypes.func,
    onLoginFailed: PropTypes.func,
    onRegisterSuccess: PropTypes.func,
    onRegisterFailed: PropTypes.func
};

const defaultProps = {
    className: undefined,
    onLoginSuccess: f => f,
    onLoginFailed: f => f,
    onRegisterSuccess: f => f,
    onRegisterFailed: f => f
}

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
    const [registerAlertData, setRegisterAlertData] = React.useState({
        login: false,
        password: false,
        passwordRepeat: false,
        email: false,
        name: false,
        surname: false,
        patronymic: false,
        sex: false,
        message: ""
    });
    const [showLoginAlert, setShowLoginAlert] = React.useState(false);
    const [loginAlertData, setLoginAlertData] = React.useState({
        login: false,
        password: false,
        message: ""
    });
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
        setLoginData({login: "", password: ""});
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
        setRegisterAlertData({
            login: false,
            password: false,
            passwordRepeat: false,
            email: false,
            name: false,
            surname: false,
            patronymic: false,
            sex: false,
            message: ""
        });
        setLoginAlertData({login: false, password: false, message: ""});
    }

    const handleTabChange = (evt, newValue) => {
        setCurrentTab(newValue);
        clearStates();
    };

    const handleRegisterFieldChange = (evt) => {
        setRegisterAlertData({
            login: false,
            password: false,
            passwordRepeat: false,
            email: false,
            name: false,
            surname: false,
            patronymic: false,
            sex: false,
            message: ""
        });
        setShowRegisterAlert(false);
        const value = evt.target.value;
        setRegisterData({
            ...registerData,
            [evt.target.name]: value
        });
    }

    const handleLoginFieldChange = (evt) => {
        setLoginAlertData({
            login: false,
            password: false,
            message: ""
        })
        setShowLoginAlert(false);
        const value = evt.target.value;
        setLoginData({
            ...loginData,
            [evt.target.name]: value
        });
    };

    const validateRegisterData = () => {
        const newRegisterAlertData = registerAlertData; 
        let hasEmpty = false;
        for (let key of Object.keys(registerData)) {
            const isEmpty = validator.isEmpty(registerData[key]);
            if (isEmpty) {
                newRegisterAlertData[key] = true;
                hasEmpty = true;
            }
        }

        if (hasEmpty) {
            setRegisterAlertData({...newRegisterAlertData, message: "Все поля должны быть заполненны!"});
            setShowRegisterAlert(true);
            return false;
        }

        if (!validator.isEmail(registerData.email)) {
            setRegisterAlertData({...registerAlertData, email: true, message: "Укажите действительную почту!"});
            setShowRegisterAlert(true);
            return false;
        }

        if (!validator.equals(registerData.password, registerData.passwordRepeat)) {
            setRegisterAlertData({...registerAlertData, password: true, passwordRepeat: true, message: "Пароли не совпадают!"});
            setShowRegisterAlert(true);
            return false;
        }
        return true;
    };

    const handleRegisterClick = () => {
        if (validateRegisterData()) {
            API.register(registerData)
            .then(userData => {
                localStorage.setItem("user", JSON.stringify(userData));
                API.login({ login: registerData.login, password: registerData.password });
                onRegisterSuccess(userData);
            })
            .catch(err => {
                setRegisterAlertData({
                    ...registerAlertData,
                    message: err.message
                });
                setShowRegisterAlert(true);
                onRegisterFailed(err);
            });
        }
    };

    const validateLoginData = () => {
        const newLoginAlertData = loginAlertData; 
        let hasEmpty = false;
        for (let key of Object.keys(loginData)) {
            const isEmpty = validator.isEmpty(loginData[key]);
            if (isEmpty) {
                newLoginAlertData[key] = true;
                hasEmpty = true;
            }
        }
        if (hasEmpty) {
            setLoginAlertData({...newLoginAlertData, message: "Все поля должны быть заполненны!"});
            setShowLoginAlert(true);
            return false;
        }

        return true;
    };

    const handleLoginClick = () => {
        if (validateLoginData()) {
            API.login(loginData)
            .then(userData => {
                localStorage.setItem("user", JSON.stringify(userData));
                
                setShowLoginAlert(false);
                onLoginSuccess(userData);
            })
            .catch(err => {
                setLoginAlertData({
                    login: true,
                    password: true,
                    message: err.message
                });
                setShowLoginAlert(true);
                onLoginFailed(err);
            });
        }
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
                        <TextField 
                            className={styles.field} 
                            error={registerAlertData.email} 
                            name="email" 
                            onChange={handleRegisterFieldChange} 
                            variant="filled" 
                            type="text" 
                            label="Email" 
                            required 
                        />
                        <TextField 
                            className={styles.field} 
                            error={registerAlertData.login} 
                            name="login" onChange={handleRegisterFieldChange} 
                            variant="filled" 
                            type="text" 
                            label="Логин" 
                            required 
                        />
                        <TextField 
                            className={styles.field} 
                            error={registerAlertData.surname} 
                            name="surname" 
                            onChange={handleRegisterFieldChange}
                            variant="filled" 
                            type="text" 
                            label="Фамилия" 
                            required 
                        />
                        <TextField 
                            className={styles.field} 
                            error={registerAlertData.name} 
                            name="name" 
                            onChange={handleRegisterFieldChange} 
                            variant="filled" 
                            type="text" 
                            label="Имя" 
                            required 
                        />
                        <TextField 
                            className={styles.field} 
                            error={registerAlertData.patronymic} 
                            name="patronymic" 
                            onChange={handleRegisterFieldChange} 
                            variant="filled" 
                            type="text" 
                            label="Отчество" 
                            required 
                        />
                        <TextField 
                            className={styles.field} 
                            error={registerAlertData.password} 
                            name="password" 
                            onChange={handleRegisterFieldChange} 
                            variant="filled" 
                            type="password" 
                            label="Пароль" 
                            required 
                        />
                        <TextField 
                            className={styles.field} 
                            error={registerAlertData.passwordRepeat} 
                            name="passwordRepeat" 
                            onChange={handleRegisterFieldChange} 
                            variant="filled" 
                            type="password" 
                            label="Повтор пороля" 
                            required 
                        />
                        { showRegisterAlert ? <Alert severity="error" variant="filled">{registerAlertData.message}</Alert> : <></> }
                    </div>
                    <Button className={styles.registerButton} onClick={handleRegisterClick}>Зарегистрироваться</Button>
                </TabPanel>
                <TabPanel value={currentTab} index={1} className={styles.panelLogin}>
                    <div className={styles.loginFields}>
                        <TextField 
                            className={styles.field} 
                            name="login" 
                            error={loginAlertData.login} 
                            onChange={handleLoginFieldChange} 
                            variant="filled" 
                            type="text" 
                            label="Логин" 
                            required 
                        />
                        <TextField 
                            className={styles.field} 
                            name="password" 
                            error={loginAlertData.password} 
                            onChange={handleLoginFieldChange} 
                            variant="filled" 
                            type="password" 
                            label="Пароль" required 
                        />
                        { showLoginAlert ? <Alert severity="error" variant="filled">{loginAlertData.message}</Alert> : <></> }
                    </div>
                    <Button className={styles.loginButton} onClick={handleLoginClick}>Войти</Button>
                </TabPanel>
            </div>
        </div>
    )
}

RegisterLoginForm.propTypes = propTypes;
RegisterLoginForm.defaultProps = defaultProps;

export default RegisterLoginForm;