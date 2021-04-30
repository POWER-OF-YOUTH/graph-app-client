import React from 'react';

import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

import TabPanel from "./TabPanel";

import styles from './RegisterLoginForm.module.css';

function RegisterLoginForm(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={props.className}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <p className={styles.logoName}>Graph App</p>
                    <p className={styles.logoCaption}>Редактирование графов в реальном времени</p>
                </div>
                <Tabs value={value} onChange={handleChange} className={styles.actionTabs} variant="fullWidth" fixed>
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
                    <Button className={styles.registerButton}>Зарегистрироваться</Button>
                </TabPanel>
                <TabPanel value={value} index={1} className={styles.panelLogin}>
                    <div className={styles.loginFields}>
                        <TextField className={styles.field} variant="filled" type="text" label="Логин" required />
                        <TextField className={styles.field} variant="filled" type="password" label="Пароль" required />
                    </div>
                    <Button className={styles.loginButton}>Войти</Button>
                </TabPanel>
            </div>
        </div>
    )
}

export default RegisterLoginForm;