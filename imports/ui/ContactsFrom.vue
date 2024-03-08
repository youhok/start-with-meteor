<template>
    <div>
        <h3>Contact Form</h3>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="formData.name" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="formData.email" required>
            </div>
            <div>
                <label for="imageUrl">Image URL:</label>
                <input type="text" id="imageUrl" v-model="formData.imageUrl">
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Meteor } from 'meteor/meteor';

const formData = ref({
    name: '',
    email: '',
    imageUrl: ''
});

const handleSubmit = async () => {
    try {
        // Insert data into the collection
        await Meteor.call('contacts.insert', {
            name: formData.value.name,
            email: formData.value.email,
            imageUrl: formData.value.imageUrl
        });
        console.log('Data inserted successfully');
        // Reset the form data after successful insertion
        formData.value = {
            name: '',
            email: '',
            imageUrl: ''
        };

        // Optionally, show a success message or navigate to another page
        console.log('Data inserted successfully');
    } catch (error) {
        console.error('Error inserting data:', error);
        // Optionally, show an error message to the user
    }
};
</script>

<style scoped>
/* Add styles as needed */
</style>