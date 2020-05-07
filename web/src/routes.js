import React from 'react';
import {BrowserRouter, Switch, Route} from  'react-router-dom'

import Main from './pages/Main'
import Singer from './pages/Singer'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}></Route>
                <Route path="/singer" component={Singer}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
