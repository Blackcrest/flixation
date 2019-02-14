import React from 'react';
import { Router, Route, Switch} from 'react-router';
import history from '../api/history';

import Home from '../ui/pages/Home'
import Discover from '../ui/pages/Discover';
import Browse from '../ui/pages/Browse';
import Collection from '../ui/pages/Collection';
import Roulette from '../ui/pages/Roulette';
import Search from '../ui/pages/Search';
import Detail from '../ui/pages/Detail';


import Login from '../ui/pages/Login';
import Signup from '../ui/pages/Signup';
import Dashboard from '../ui/pages/Dashboard';
import NotFound from '../ui/pages/NotFound';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard'];

export const routes = (
    <Router history={history}>
        <Switch>
            <Route path="/discover" component={Discover} />
            <Route path="/browse" component={Browse} />
            <Route path="/collection" component={Collection} />
            <Route path="/roulette" component={Roulette} />
            <Route path="/search" component={Search} />

            <Route path="/detail" component={Detail} />

            <Route path="/" exact component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export const onAuthChange = (isAuthenticated) => {
    const pathname = history.location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);

    if(isUnauthenticatedPage && isAuthenticated){
        history.replace('/dashboard');
    } else if(isAuthenticatedPage && !isAuthenticated){
        history.replace("/")
    }
};