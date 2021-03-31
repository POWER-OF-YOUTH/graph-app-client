import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { TextField } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const drawerWidth = 320;
const drawerHeight = 365;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    height: drawerHeight,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    height: drawerHeight,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


export default function MainPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
         
        </AppBar>
        <Typography paragraph>
          Редактируй графы в реальном времени один (или вместе с друзьями, уже возможно )
        </Typography>
      <TabPanel value={value} index={0}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >        
        
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Вход" {...a11yProps(0)} />
          <Tab label="Регистрация" {...a11yProps(1)} />
          
        </Tabs>                    
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
            type="password"
            label="Пароль"
            placeholder="Пароль"
          
          />
          
          <Button color="primary" variant="contained">Войти</Button>
          
        
      </Drawer>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >        
        
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Вход" {...a11yProps(0)} />
          <Tab label="Регистрация" {...a11yProps(1)} />
          
        </Tabs>
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
      </TabPanel>      
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
     
    </div>
    
  );
}