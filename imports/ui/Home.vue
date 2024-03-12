<template>
  <navbar />
  <div class="min-h-full">
    <div class="max-w-4xl mx-auto p-2">
      <ContactsFrom />
      <contactList />
    </div>
  </div>
      
</template>

<script setup>
import contactList from './contactList.vue';
import ContactsFrom from './ContactsFrom.vue';
import navbar from './navbar.vue';

</script>