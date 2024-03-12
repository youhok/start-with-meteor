<template>
    <div class="mt-7">
        <!-- <h1>Contact List</h1> -->
        <!-- <ul>
            <li v-for="contact in contacts" :key="contact._id">{{ contact.name }} - {{ contact.email }}</li>
        </ul> -->
        <h1 class="text-center">Contact List</h1>

        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5"
            v-for="contact in contacts" :key="contact._id">
            <div class="md:flex">
                <div class="md:flex-shrink-0">
                    <img class="h-48 w-full object-cover md:w-48" :src="`${contact.imageUrl}`" alt="Event image">
                </div>
                <div class="p-8">
                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{{ contact.name }}</div>
                    <p class="block mt-1 text-lg leading-tight font-medium text-black">{{ contact.email }}</p>
                    <p class="mt-2 text-gray-500">Event Details...</p>
                    <button
                        class="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-2"
                        data-ripple-light="true" @click="removeContact(contact._id)">
                        Remove
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, } from 'vue';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'
import { ContactsCollection } from '../api/contactCollection';
import { push } from 'notivue'
const contacts = ref([]);

const removeContact = (_id) =>{
    console.log(_id);
    Meteor.call('contacts.remove', { contactId: _id }, (error) => {
    if (error) {
        
      console.error('Error removing contact:', error);
    } else {
        push.success("Remove Successful")
      console.log('Contact removed successfully');
      // Optionally, update the local state to remove the contact
      contacts.value = contacts.value.filter(contact => contact._id !== _id);
    }
  });
}


onMounted(() => {
    Meteor.subscribe('contacts', {
        onReady() {
            // Set up Tracker.autorun to observe changes in the collection
            Tracker.autorun(() => {
                // Fetch the data from the collection and update the local state
                const fetchedContacts = ContactsCollection.find({}, { sort: { createdAt: -1 } }).fetch();
                contacts.value = fetchedContacts;
            });
        },
        onError(error) {
            console.error('Subscription error:', error);
        }
    });
});

</script>

<style scope></style>