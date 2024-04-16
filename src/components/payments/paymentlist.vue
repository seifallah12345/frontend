<template>
    <div>
      <h1>Liste des Paiements</h1>
      <ul>
        <li v-for="payment in payments" :key="payment.id">
          <router-link :to="`/get-payment-by-id/${payment.id}`">
            Payment ID: {{ payment.id }} - method: {{ payment.paymentMethod }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onBeforeMount } from 'vue';
  import usePayment from '@/components/services/servicepayment.js';
  
  const { getAllPayments } = usePayment();
  const payments = ref([]);
  
  onBeforeMount(() => {
    getAllPayments()
      .then(response => {
        payments.value = response.data; // Adjust if your API structure is different
      })
      .catch(error => {
        console.error('Error fetching payments:', error);
      });
  });
  
  </script>
  
  <style scoped>
  /* Add your custom styles as needed */
  </style>
  