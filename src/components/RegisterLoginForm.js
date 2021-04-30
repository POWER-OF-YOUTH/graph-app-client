import React from 'react';

import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

import TabPanel from "./TabPanel";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        minWidth: "290px",
        maxWidth: "420px",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#395273",
        borderRadius: "13px"
    },
    logo: {
        width: "220px",
        textAlign: "center",
        color: "white",
    },
    logoName: {
        margin: "0",
        marginTop: "10px",
        fontFamily: "Monteserrat, sans-serif",
        fontWeight: "bold",
        fontSize: "42px"
    },
    actionTabs: {
        color: "white",
        width: "100%",
        '& .MuiTabs-indicator': {
            backgroundColor: "white"
        }
    },
    logoCaption: {
        margin: "0",
        fontSize: "15px"
    },
    panelRegister: {
        boxSizing: "border-box",
        padding: "15px",
        width: "100%"
    },
    registerFields: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "15px",
        '& :nth-child(n)': {
            gridColumn: "span 3"
        },
        '& :nth-child(3)': {
            gridColumn: "span 1"
        },
        '& :nth-child(4)': {
            gridColumn: "span 1"
        },
        '& :nth-child(5)': {
            gridColumn: "span 1"
        }
    },
    panelLogin: {
        boxSizing: "border-box",
        padding: "15px",
        width: "100%"
    },
    loginFields: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "15px"
    },
    field: {
        width: "100%",
        '& .MuiFormLabel-root': {
            color: "#919BA6"
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: "white"
        },
        '& .MuiFilledInput-underline:after': {
            borderBottomColor: "white"
        },
        '& .MuiInputBase-input': {
            color: "white"
        }
    },
    registerButton: {
        margin: "0",
        marginTop: "20px",
        width: "100%",
        backgroundColor: "#00FF00",
        color: "white",
        '&:hover': {
            backgroundColor: "white",
            color: "black"
        },
        '& .MuiButtonBase-root': {
            backgroundColor: "white"
        }
    },
    loginButton: {
        margin: "0",
        marginTop: "20px",
        width: "100%",
        backgroundColor: "#1463FF",
        color: "white",
        '&:hover': {
            backgroundColor: "white",
            color: "black"
        },
        '& .MuiButtonBase-root': {
            backgroundColor: "white"
        }
    }
}));

function RegisterLoginForm(props) {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={props.className}>
            <div className={classes.container}>
                <div className={classes.logo}>
                    <p className={classes.logoName}>Graph App</p>
                    <p className={classes.logoCaption}>Редактирование графов в реальном времени</p>
                </div>
                <Tabs value={value} onChange={handleChange} className={classes.actionTabs} variant="fullWidth" fixed>
                    <Tab label="Регистрация" />
                    <Tab label="Вход" />
                </Tabs>
                <TabPanel value={value} index={0} className={classes.panelRegister}>
                    <div className={classes.registerFields}>
                        <TextField className={classes.field} variant="filled" type="text" label="Email" required />
                        <TextField className={classes.field} variant="filled" type="text" label="Логин" required />
                        <TextField className={classes.field} variant="filled" type="text" label="Фамилия" required />
                        <TextField className={classes.field} variant="filled" type="text" label="Имя" required />
                        <TextField className={classes.field} variant="filled" type="text" label="Отчество" required />
                        <TextField className={classes.field} variant="filled" type="password" label="Пароль" required />
                        <TextField className={classes.field} variant="filled" type="password" label="Повтор пороля" required />
                    </div>
                    <Button className={classes.registerButton}>Зарегистрироваться</Button>
                </TabPanel>
                <TabPanel value={value} index={1} className={classes.panelLogin}>
                    <div className={classes.loginFields}>
                        <TextField className={classes.field} variant="filled" type="text" label="Логин" required />
                        <TextField className={classes.field} variant="filled" type="password" label="Пароль" required />
                    </div>
                    <Button className={classes.loginButton}>Войти</Button>
                </TabPanel>
            </div>
        </div>
    )
}

export default RegisterLoginForm;