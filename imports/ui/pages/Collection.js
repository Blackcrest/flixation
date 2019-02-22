import React from 'react';
import { withTracker } from 'meteor/react-meteor-data'
import { Accounts } from 'meteor/accounts-base';

import { Collection } from '../../api/collection';
import { Wishlist } from '../../api/wishlist';
import { Seen } from '../../api/seen';

import PageHeader from '../components/PageHeader';
import TabControl from '../components/TabControl/TabControl';
import Overview from '../components/Overview/Overview';

export class CollectionOverview extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedTab: 0
        }
    }

    changeTab = (selectedTab) => {
        this.setState({selectedTab});
    }

    renderTitles = () => {
        if(this.props.userCollection[this.state.selectedTab].length === 0){
            return <div>There is nothing here!</div>
        } else{
            return <Overview data={this.props.userCollection[this.state.selectedTab]} />
        }
    }

    render(){
        console.log('collection: ', this.props.userCollection[this.state.selectedTab])

        return(
            <div className="collection">
                <PageHeader title="Collection" subTitle="Keep track of all your movies and tv shows" />
                <TabControl selectedTab={this.state.selectedTab}
                            items={[[this.props.userCollection[0].length, "Collection"],
                                    [this.props.userCollection[1].length, "Seen"],
                                    [this.props.userCollection[2].length, "Wishlist"]]}
                            callback={this.changeTab} />
                <div id="result-container" className="result-container">
                    {this.renderTitles()}
                </div>
            </div>
        )
    }
}


export default withTracker(() => {
    Meteor.subscribe('collection');
    Meteor.subscribe('wishlist');
    Meteor.subscribe('seen');

    const userId = Accounts.userId();

    const collection = Collection.find({userId}).map(collectionItem => {
        return { 
            ...collectionItem
        };
     });

    const seen = Seen.find({userId}).map(seenItem => {
        return { 
            ...seenItem
        };
     });

    const wishlist = Wishlist.find({userId}).fetch().map(wishlistItem => {
        return {
            ...wishlistItem
        }
     });

    return {
        userCollection: [collection, seen, wishlist]
    };
})(CollectionOverview);