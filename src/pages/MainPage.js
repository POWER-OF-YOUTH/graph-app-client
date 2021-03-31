import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { TextField } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },  
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));





export default function MainPage() {
  const classes = useStyles();

  return (
      
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >        
        
          <ButtonGroup disableElevation variant="contained" color="primary">
             <Button>Вход</Button>
             <Button>Регистрация</Button>
          </ButtonGroup>
          <TextField
            variant="filled"
            color="secondary"
            type="name"
            label="Ваше имя"
            placeholder="Имя"          
          />
           <TextField
            variant="filled"
            color="secondary"
            type="name"
            label="Ваша фамилия"
            placeholder="Фамилия"
          
          />
           <TextField
            variant="filled"
            color="secondary"
            type="login"
            label="Логин"
            placeholder="Логин"
          
          />
           <TextField
            variant="filled"
            color="secondary"
            type="email"
            label="Ваша почта"
            placeholder="Почта"
          
          />
           <TextField
            variant="filled"
            color="secondary"
            type="password"
            label="Пароль"
            placeholder="Пароль"
          
          />
          
          <Button color="primary" variant="contained">Зарегистрироваться</Button>
          
        
      </Drawer>
    </div>
  );
}