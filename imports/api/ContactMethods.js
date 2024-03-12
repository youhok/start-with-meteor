import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check';
import { ContactsCollection } from "./contactCollection";

Meteor.methods({
    'contacts.insert'({name , email , imageUrl}) {
        check(name , String);
        check(email , String);
        check(imageUrl , String);
        if (!name){
            throw new Meteor.Error("Name is required");
        }
        const createdAt = new Date(); // Current date and time
      return ContactsCollection.insert({name , email , imageUrl , createdAt });
    },
    'contacts.remove'({ contactId }) {
        try {
            check(contactId , String)
            // Check if the contactId is provided and valid
            if (!contactId || typeof contactId !== 'string') {
                throw new Meteor.Error('Invalid parameters', 'Contact ID is missing or invalid');
            }
            // Remove the contact with the specified ID
            ContactsCollection.remove(contactId);
            return true; // Indicate successful removal
        } catch (error) {
            console.error('Error removing contact:', error);
            throw new Meteor.Error('Internal server error', 'Failed to remove contact');
        }
    }
});