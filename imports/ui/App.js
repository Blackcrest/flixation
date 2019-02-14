import React from 'react';

import { Router, Link } from 'react-router-dom';

import history from '../api/history';

import { routes } from '../routes/Routes';

import Menu from './components/Menu';
import SearchContainer from './components/SearchContainer';
import Dashboard from './pages/Dashboard';

import { Session } from 'meteor/session';

export default class App extends React.Component {
    openSearchWrapper = () => {
        console.log("Opening search...");

        Session.set('isSearchOpen', !Session.get('isSearchOpen'));
    }

    render(){
        return(
            <div>
                <Menu>
                    <button className="button" onClick={this.openSearchWrapper}>
                        Search
                    </button>
                    <Router history={history}>
                        <Link to='/discover'>
                            <button className="button">
                                Discover
                            </button>
                        </Link>
                    </Router>
                    <Router history={history}>
                        <Link to='/browse'>
                            <button className="button">
                                Browse
                            </button>
                        </Link>
                    </Router>
                    <Router history={history}>
                        <Link to='/collection'>
                            <button className="button">
                                Collection
                            </button>
                        </Link>
                    </Router>
                    <Router history={history}>
                        <Link to='/roulette'>
                            <button className="button">
                                Roulette
                            </button>
                        </Link>
                    </Router>
                </Menu>
                <div className="wrapper">
                    {routes}
                </div>
                <div className="search-wrapper" id="searchWrapper">
                    <SearchContainer />
                </div>
            </div>
        )
    }
}