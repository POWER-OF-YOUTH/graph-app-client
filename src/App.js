import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from './pages/MainPage';

function App() {
  return (  
    <Router>
      <Switch>
            <Route exact path="/" component={MainPage} />     

      </Switch>            
    </Router>         
  );
}

export default App;