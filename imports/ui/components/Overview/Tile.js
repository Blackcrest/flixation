import React from 'react';
import history from '../../../api/history';
import moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data'
import { Accounts } from 'meteor/accounts-base';

import { Collection } from '../../../api/collection';
import { Wishlist } from '../../../api/wishlist';
import { Seen } from '../../../api/seen';

import Button from '../Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Tile extends React.Component {
    navigateToDetail = () => {
        console.log('show detail of:', this.props.data.id);

        history.push({
            pathname: '/detail',
            search: '?id=' + this.props.data.id,
            state: { id: this.props.data.id }
        })
    }

    addToCollection = (e) => {
        e.stopPropagation();
        console.log('Adding to collection');

        if(this.props.inCollection){
            Meteor.call('collection.remove', this.props.data.id, (err, res) => {
                if(err)
                    console.log(err);
                
                if(res){
                    console.log("remove from collection")
                }
            });
        } else{
            Meteor.call('collection.insert', this.props.data, (err, res) => {
                if(err)
                    console.log(err);
                
                if(res){
                    console.log("added to collection")
                }
            }); 
        }
    }

    addToSeen = (e) => {
        e.stopPropagation();

        if(this.props.seen){
            Meteor.call('seen.remove', this.props.data.id, (err, res) => {
                if(err)
                    console.log(err);
                
                if(res){
                    console.log("remove from seen")
                }
            });
        } else{
            Meteor.call('seen.insert', this.props.data, (err, res) => {
                if(err)
                    console.log(err);
                
                if(res){
                    console.log("added to seen")
                }
            }); 
        }
    }

    addToWishList = (e) => {
        e.stopPropagation();

        if(this.props.inWishList){
            Meteor.call('wishlist.remove', this.props.data.id, (err, res) => {
                if(err)
                    console.log(err);
                
                if(res){
                    console.log("remove from wishlist")
                }
            });
        } else{
            Meteor.call('wishlist.insert', this.props.data, (err, res) => {
                if(err)
                    console.log(err);
                
                if(res){
                    console.log("added to wishlist")
                }
            }); 
        }
    }

    render(){
        return(
            <div className={"tile tile--" + this.props.type} onClick={this.navigateToDetail}>
                <div className="tile__backdrop">
                    <img src={"https://image.tmdb.org/t/p/w500/" + this.props.image} />
                </div>
                <div className="tile__content-block">
                    <div className="tile__information">
                        <div className="tile__title">{this.props.title}</div>
                        <div className="tile__release">{moment(this.props.data.release_date).format('LL')}</div>
                    </div>
                    <div className="tile__action-bar"> 
                        <Button type="action" 
                                active={this.props.inCollection}
                                name={<FontAwesomeIcon icon="plus-circle" />}
                                callback={this.addToCollection} />
                        <Button type="action" 
                                active={this.props.seen}
                                name={<FontAwesomeIcon icon="eye" />}
                                callback={this.addToSeen} />
                        <Button type="action" 
                                active={this.props.inWishList}
                                name={<FontAwesomeIcon icon="heart" />}
                                callback={this.addToWishList} />
                    </div>
                </div>
                {/*<div className="tile__backdrop">
                    <img src={"https://image.tmdb.org/t/p/w500/" + this.props.image} />
                </div>
                <div className="tile__action-bar"> 
                        <Button type="action" 
                                name={<FontAwesomeIcon icon="plus-circle" />}
                                callback={this.addToCollection} />
                        <Button type="action" 
                                active={this.props.seen}
                                name={<FontAwesomeIcon icon="eye" />}
                                callback={this.addToSeen} />
                        <Button type="action" 
                                active={this.props.inWishList}
                                name={<FontAwesomeIcon icon="heart" />}
                                callback={this.addToWishList} />
                </div>
                <div >  
                    <div className="tile__title">{this.props.title}</div>
                    <div className="tile__release">{moment(this.props.data.release_date).format('LL')}</div>
                </div>*/}
            </div>
        )
    }
}

export default withTracker((props) => {
    Meteor.subscribe('collection');
    Meteor.subscribe('wishlist');
    Meteor.subscribe('seen');

    const id = props.data.id
    const userId = Accounts.userId();
    const inCollection = Collection.findOne({ id, userId });
    const inWishList = Wishlist.findOne({ id, userId });
    const seen = Seen.findOne({ id, userId });

    return {
        inCollection: inCollection ? true : false,
        inWishList: inWishList ? true : false,
        seen: seen ? true : false
    };
})(Tile);