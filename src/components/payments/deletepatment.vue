<template>
    <div>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="paymentId" class="form-label">Payment ID</label>
          <input type="text" class="form-control" id="paymentId" v-model="paymentId">
        </div>
        <button type="submit" class="btn btn-danger">Delete Payment</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import usePayment from '@/components/services/servicepayment.js';
  
  const { deletePayment: deletePaymentAPI } = usePayment(); 
  
  const router = useRouter();
  const paymentId = ref('');
  
  const submitForm = () => {
    deletePaymentAPI(paymentId.value) 
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
  