<template>
  <h1 class="text-3xl font-bold my-6">Welcome to Meteor!</h1>
    <ContactsFrom />
    <contactList />
</template>

<script setup>
import contactList from './contactList.vue';
import ContactsFrom from './ContactsFrom.vue';
</script>