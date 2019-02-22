import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

Accounts.validateNewUser((user) => {
    const username = user.username;
    const email = user.emails[0].address;

    new SimpleSchema({
      username: {
        type: String,
        min: 1
      },
      email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
      }
    }).validate({
      email, username
    });

    return true;
 });