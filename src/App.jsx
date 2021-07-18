import React from 'react';
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';

//import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import GraphsListPage from './pages/GraphsListPage';

import API from './lib/API';


function App() {
    React.useEffect(() => {
        API.check().then(isAuthenticated => {
            if (!isAuthenticated && localStorage.getItem("user") != null) {
                const user = JSON.parse(localStorage.getItem("user"));
                API.login({ login: user.login, password: user.password });
            }
        });
    }, []);

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