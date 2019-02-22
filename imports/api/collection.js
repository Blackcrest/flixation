import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

export const Collection = new Mongo.Collection('collection');

if(Meteor.isServer){
    Meteor.publish('collection', function() {
        return Collection.find({ userId: this.userId });
    })
}

Meteor.methods({
    'collection.insert'(data) {
        if(!this.userId){
            throw new Meteor.Error('not-authorized');
        }

        //add
        return Collection.insert({
            ...data,
            userId: this.userId
        })
    },
    'collection.remove'(id) {
        if(!this.userId){
            throw new Meteor.Error('not-authorized');
        }

        //delete
        Collection.remove({ id, userId: this.userId });
    }
});