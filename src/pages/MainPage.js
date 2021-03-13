import React from 'react';
import Button from '@material-ui/core/Button';
import { AppBar, Container, IconButton, Toolbar, Box, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow:1
  }
}))

function App() {
  const classes = useStyles();

  return (
    <AppBar position =" fixed">
      <Container fixed>
        <Toolbar>
          <IconButton edge= "start"
          color ="inherit" aria-label="menu" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>sdsd</Typography>
          <Box mr={3}>
            <Button  color ="inherit" variant="ouylined">Log in</Button>
          </Box>
          <Button color="secondary" variant="contained">Sing Up</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default App;