import { Meteor } from 'meteor/meteor'
import { ContactsCollection } from '../imports/api/contactCollection';

Meteor.methods({
  'contacts.insert'(contact) {
    ContactsCollection.insert(contact);
  }
});

Meteor.publish('contacts', function () {
  return ContactsCollection.find();
});

Meteor.startup(async () => {
 
})
