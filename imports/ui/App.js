import React from 'react';

import { Router, Link } from 'react-router-dom';

import history from '../api/history';

import { routes } from '../routes/Routes';

import Menu from './components/Menu';
import SearchContainer from './components/SearchContainer';

import { Session } from 'meteor/session';
import { Accounts } from 'meteor/accounts-base';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faEye, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

//add font-awesome icons
library.add(faHeart, faEye, faPlusCircle)

export default class App extends React.Component {
    openSearchToggle = () => {
        Session.set('isSearchOpen', !Session.get('isSearchOpen'));
    }

    render(){
        return(
            <div>
                <Menu>
                    <Router history={history}>
                        <Link to='/'>
                            <button className="button">
                                Home
                            </button>
                        </Link>
                    </Router>
                    <button className="button" onClick={this.openSearchToggle}>
                        Search
                    </button>
                    <Router history={history}>
                        <Link to='/browse'>
                            <button className="button">
                                Browse
                            </button>
                        </Link>
                    </Router>
                    {Accounts.userId() ? <Router history={history}>
                                            <Link to='/collection'>
                                                <button className="button">
                                                    Collection
                                                </button>
                                            </Link>
                                            </Router> 
                                        : undefined}
                    {Accounts.userId() ? <Router history={history}>
                                            <Link to='/roulette'>
                                                <button className="button">
                                                    Roulette
                                                </button>
                                            </Link>
                                        </Router>
                                        : undefined}
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