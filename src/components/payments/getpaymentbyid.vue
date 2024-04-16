<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="paymentId" class="form-label">Payment ID</label>
        <input type="text" class="form-control" id="paymentId" v-model="paymentId">
      </div>
      <button type="submit" class="btn btn-primary">Get Payment</button>
    </form>

    <div v-if="payment">
      <h2>Payment Details</h2>
      <p><strong>Payment Method:</strong> {{ payment?.paymentMethod }}</p>
      <!-- Add more payment details as needed -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import usePayment from '@/components/services/servicepayment.js';

const { getPaymentById } = usePayment();

const route = useRoute();
const paymentId = ref(route.params.paymentId);
const payment = ref(null);

const submitForm = () => {
  getPaymentById(paymentId.value)
    .then(paymentData => {
      // Make sure paymentData is an object with the expected structure
      payment.value = paymentData.data; // Assuming payment data is in the `data` property
    })
    .catch(err => {
      console.error('Error:', err);
      // Handle error (e.g., show error message to user)
    });
};
</script>

<style scoped>
.form-label {
  font-weight: bold;
}

/* Add your custom styles as needed */
</style>
