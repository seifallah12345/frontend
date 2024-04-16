<template>
    <div>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="orderId" class="form-label">Order ID</label>
          <input type="text" class="form-control" id="orderId" v-model="orderId">
        </div>
        <button type="submit" class="btn btn-danger">Delete Order</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import useOrder from '@/components/services/servicerorder.js';
  
  const { deleteOrder: deleteOrderAPI } = useOrder(); // Rename deleteOrder to avoid conflict
  
  const router = useRouter();
  const orderId = ref('');
  
  const submitForm = () => {
    deleteOrderAPI(orderId.value) // Use deleteOrderAPI instead of deleteOrder
      .then(res => {
        console.log(res);
        router.push('/');
      })
      .catch(err => console.error('Error:', err));
  };
  </script>
  
  <style scoped>
  .form-label {
    font-weight: bold;
  }
  </style>
  