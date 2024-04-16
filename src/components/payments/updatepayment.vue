<template>
    <div>
      <form @submit.prevent="getPaymentDetails">
        <div class="mb-3">
          <label for="paymentId" class="form-label">Payment ID</label>
          <input type="text" class="form-control" id="paymentId" v-model="paymentId">
        </div>
        <button type="submit" class="btn btn-primary">Get Payment Details</button>
      </form>
  
      <div v-if="payment">
        <h2>Payment Details</h2>
        <form @submit.prevent="submitUpdate">
          <div class="mb-3">
            <label for="paymentMethod" class="form-label">Payment Method</label>
            <input type="text" class="form-control" id="paymentMethod" v-model="payment.paymentMethod">
          </div>
          <button type="submit" the="btn btn-primary">Update Payment</button>
        </form>
      </div>
  
      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import usePayments from '@/components/services/servicepayment.js';
  
  const { getPaymentById, updatePayment } = usePayments();
  const paymentId = ref('');
  const payment = ref(null);
  const error = ref('');
  
  const getPaymentDetails = () => {
    error.value = '';
  
    getPaymentById(paymentId.value)
      .then(paymentData => {
        payment.value = paymentData.data;
      })
      .catch(err => {
        console.error('Error fetching payment details:', err);
        error.value = 'Unable to retrieve payment details.';
      });
  };
  
  const submitUpdate = () => {
    error.value = '';
  
    updatePayment(paymentId.value, payment.value)
      .then(() => {
        // Refresh logic or navigation
      })
      .catch(err => {
        console.error('Error updating payment:', err);
        error.value = 'An error occurred during payment update.';
      });
  };
  </script>
  
  <style scoped>
  .form-label {
      font-weight: bold;
  }
  </style>
  