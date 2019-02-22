import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Wishlist = new Mongo.Collection('wishlist');

if(Meteor.isServer){
    Meteor.publish('wishlist', function() {
        return Wishlist.find({ userId: this.userId });
    })
}

Meteor.methods({
    'wishlist.insert'( data) {
        if(!this.userId){
            throw new Meteor.Error('not-authorized');
        }

        return Wishlist.insert({
            ...data,
            userId: this.userId
        })
    },
    'wishlist.remove'(id) {
        if(!this.userId){
            throw new Meteor.Error('not-authorized');
        }
        
        Wishlist.remove({ id, userId: this.userId });
    }
});