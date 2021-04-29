import React from 'react';

import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

import TabPanel from "./TabPanel";

const ActionTabs = withStyles({
    root: {
        color: "white"
    },
    indicator: {
        backgroundColor: "white"
    },
})(Tabs);

const useStyles = makeStyles((theme) => ({
    container: {
        width: "290px", // 290px
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#395273",
        padding: "15px",
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
    logoCaption: {
        margin: "0",
        fontSize: "15px"
    },
    panel: {
        paddingTop: "15px"
    },
    field: {
        width: "100%",
        marginBottom: "15px",
        '& .MuiFormLabel-root': {
            color: "#919BA6"
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: "white"
        },
        '& .MuiInputBase-input': {
            color: "white"
        }
    },
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
                <ActionTabs value={value} onChange={handleChange} className={classes.actionTabs} fixed>
                    <Tab label="Регистрация" />
                    <Tab label="Вход" />
                </ActionTabs>
                <TabPanel value={value} index={0} className={classes.panel}>
                    <TextField className={classes.field} variant="filled" type="text" label="Email" required />
                    <TextField className={classes.field} variant="filled" type="text" label="Логин" required />
                    <TextField className={classes.field} variant="filled" type="text" label="Фамилия" required />
                    <TextField className={classes.field} variant="filled" type="text" label="Имя" required />
                    <TextField className={classes.field} variant="filled" type="text" label="Отчество" required />
                    <TextField className={classes.field} variant="filled" type="password" label="Пароль" required />
                    <TextField className={classes.field} variant="filled" type="password" label="Повтор пороля" required />
                    <Button>Зарегистрироваться</Button>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <TextField className={classes.field} variant="filled" type="text" label="Логин" required />
                    <TextField className={classes.field} variant="filled" type="password" label="Пароль" required />
                    <Button>Войти</Button>
                </TabPanel>
            </div>
        </div>
    )
}

export default RegisterLoginForm;