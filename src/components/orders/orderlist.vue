<template>
    <div>
      <h1>Liste des Commandes</h1>
      <ul>
        <li v-for="order in orders" :key="order.id">
          <router-link :to="`/get-order-by-id/${order.id}`">
            {{ order.orderNumber }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onBeforeMount } from 'vue';
  import useOrder from '@/components/services/servicerorder.js';
  
  const { getAllOrders } = useOrder();
  const orders = ref([]);
  
  onBeforeMount(() => {
    getAllOrders()
      .then(response => {
        orders.value = response.data; // Adjust if your API structure is different
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  });
  </script>
  
  <style scoped>
  /* Add your custom styles as needed */
  </style>
  