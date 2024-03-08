<template>
    <div>
        <h3>Contact List</h3>
        <ul>
            <li v-for="contact in contacts" :key="contact._id">{{ contact.name }} - {{ contact.email }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted, } from 'vue';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'
import { ContactsCollection } from '../api/contactCollection';

const contacts = ref([]);


onMounted(() => {
    Meteor.subscribe('contacts', {
        onReady() {
            // Set up Tracker.autorun to observe changes in the collection
           Tracker.autorun(() => {
                // Fetch the data from the collection and update the local state
                const fetchedContacts = ContactsCollection.find({}).fetch();
                contacts.value = fetchedContacts;
            });
        },
        onError(error) {
            console.error('Subscription error:', error);
        }
    });
});

</script>

<style scope>

</style>