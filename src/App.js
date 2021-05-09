import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GraphsListPage from './pages/GraphsListPage';

import MainPage from './pages/MainPage';

function App() {
  return (  
    <Router>
      <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/graphs" component={GraphsListPage} />
      </Switch>            
    </Router>         
  );
}

export default App;