import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDom from 'react-dom';
import history from '../imports/api/history';
import { Tracker } from 'meteor/tracker'; 

import { routes, onAuthChange} from '../imports/routes/Routes';
import '../imports/startup/simple-schema-configuration.js';

import { Session } from 'meteor/session';

import App from '../imports/ui/App'

/*componentDidMount = () => {
    if(Meteor.userId()){
        history.replace('/links');
    } else if(!Meteor.userId()){
        history.replace('/');
    }
}
*/

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    onAuthChange(isAuthenticated);
});

Tracker.autorun(() => {
    const isSearchOpen = Session.get('isSearchOpen');

    const wrapper = document.getElementById('searchWrapper');
    
    if(wrapper)
        wrapper.classList.toggle('search-open', isSearchOpen);
})

Meteor.startup(() => {
    Session.set('isSearchOpen', false);
    ReactDom.render(<App />, document.getElementById('app'));
});