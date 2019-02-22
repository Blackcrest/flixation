import React from 'react';
import PropTypes from 'prop-types';
import { Accounts } from 'meteor/accounts-base';

import history from '../../api/history';

const Menu = (props) => {
    renderRedirects = () => {
        return (
            <div className="header__profile-control">
                <button className="button button--logout" onClick={() => { history.push('/login'); }}>Login</button>
                <button className="button button--logout" onClick={() => { history.push('/signup'); }}>Sign Up</button>
            </div>
        );
    }

    renderAccount = () => {
        return (<button className="button button--logout" onClick={ () => Accounts.logout() }>Logout</button>);
    }

    return (
        <div className="header">
            <div className="header__content">
                <div className="header__logo">
                    LOGO
                </div>
                <div className="header__menu-container">
                    {props.children}
                </div>
                <div className="header__profile">
                    {Accounts.userId() ? this.renderAccount() : this.renderRedirects()}
                </div>
            </div>
        </div>
    );
};

Menu.propTypes = {

}

export default Menu;