import React from 'react';
import PropTypes from 'prop-types';
import { Accounts } from 'meteor/accounts-base';

const PrivateHeader = (props) => {
    return (
        <div className="header">
            <div className="header__content">
                <div className="header__logo">
                    LOGO
                </div>
                <div className="header__menu-container">
                    {props.children}
                </div>
                <div className="header__profile-control">
                    <button className="button button--logout" onClick={ () => Accounts.logout() }>
                    {Accounts.userId() ? "Logout" : "Login"}</button>
                </div>
            </div>
        </div>
    );
};

PrivateHeader.propTypes = {

}

export default PrivateHeader;