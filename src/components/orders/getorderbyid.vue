<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="orderNumber" class="form-label">Order Number</label>
        <input type="text" class="form-control" id="orderNumber" v-model="orderNumber">
      </div>
      <button type="submit" class="btn btn-primary">Get Order</button>
    </form>

    <div v-if="order">
      <h2>Order Details</h2>
      <p><strong>Order Number:</strong> {{ order?.orderNumber }}</p>
      <!-- Add more order details as needed -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import useOrder from '@/components/services/servicerorder.js';

const { getOrderById } = useOrder();

const route = useRoute();
const orderNumber = ref(route.params.orderNumber);
const order = ref(null);

const submitForm = () => {
  getOrderById(orderNumber.value)
    .then(orderData => {
      // Make sure orderData is an object with the expected structure
      order.value = orderData.data; // Assuming order data is in the `data` property
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
