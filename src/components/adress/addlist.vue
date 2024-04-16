<template>
    <div>
      <h1>Liste des Adresses</h1>
      <ul>
        <li v-for="address in addresses" :key="address.id">
          <router-link :to="`/get-address-by-id/${address.id}`">
            {{ address.street }}, {{ address.city }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onBeforeMount } from 'vue';
  import useAddress from '@/components/services/serviceaddress.js';
  
  const { getAllAddresses } = useAddress();
  const addresses = ref([]);
  
  onBeforeMount(() => {
    getAllAddresses()
      .then(response => {
        addresses.value = response.data; // Adjust if your API structure is different
      })
      .catch(error => {
        console.error('Error fetching addresses:', error);
      });
  });
  </script>
  
  <style scoped>
  /* Add your custom styles as needed */
  </style>
  