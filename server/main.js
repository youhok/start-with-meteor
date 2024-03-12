import { Meteor } from 'meteor/meteor'
import { ContactsCollection } from '../imports/api/contactCollection';
import '../imports/api/ContactMethods'

Meteor.publish('contacts', function () {
  return ContactsCollection.find();
});

Meteor.startup(async () => {
 
})
// Meteor.methods({
//   'contacts.insert'(contact) {
//     ContactsCollection.insert(contact);
//   }
// });
