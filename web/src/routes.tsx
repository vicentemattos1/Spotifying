import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom'
import CollectionMenu from './pages/CollectionMenu';
import SearchMenu from './pages/SearchMenu';

import Home from './pages/Home';
import Landing from './pages/Landing'
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function Routes(){
    return (
        
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/signup"  component={SignUp} />
            <Route path="/login"  component={Login} />
            <Route path="/home"  component={Home} />
            <Route path="/search"  component={SearchMenu} />
            <Route path="/collection"  component={CollectionMenu} />
        </BrowserRouter>
    );
}

export default Routes;