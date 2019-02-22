import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Seen = new Mongo.Collection('seen');

if(Meteor.isServer){
    Meteor.publish('seen', function() {
        return Seen.find({ userId: this.userId });
    })
}

Meteor.methods({
    'seen.insert'(data) {
        if(!this.userId){
            throw new Meteor.Error('not-authorized');
        }

        return Seen.insert({
            ...data,
            userId: this.userId
        })
    },
    'seen.remove'(id) {
        if(!this.userId){
            throw new Meteor.Error('not-authorized');
        }

        Seen.remove({ id, userId: this.userId });
    }
});