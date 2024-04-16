<template>
    <div>
      <form @submit.prevent="getOrderDetails">
        <div class="mb-3">
          <label for="orderId" class="form-label">Order ID</label>
          <input type="text" class="form-control" id="orderId" v-model="orderId">
        </div>
        <button type="submit" class="btn btn-primary">Get Order Details</button>
      </form>
  
      <div v-if="order">
        <h2>Order Details</h2>
        <form @submit.prevent="submitUpdate">
          <div class="mb-3">
            <label for="orderNumber" class="form-label">Order Number</label>
            <input type="number" class="form-control" id="orderNumber" v-model="order.orderNumber">
          </div>
          <button type="submit" class="btn btn-primary">Update Order</button>
        </form>
      </div>
  
      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import useOrders from '@/components/services/servicerorder.js';
  
  const { getOrderById, updateOrder } = useOrders();
  const orderId = ref('');
  const order = ref(null);
  const error = ref('');
  
  const getOrderDetails = () => {
    error.value = '';
  
    getOrderById(orderId.value)
      .then(orderData => {
        order.value = orderData.data;
      })
      .catch(err => {
        console.error('Error fetching order details:', err);
        error.value = 'Unable to retrieve order details.';
      });
  };
  
  const submitUpdate = () => {
    error.value = '';
  
    updateOrder(orderId.value, order.value)
      .then(() => {
        // Refresh logic or navigation
      })
      .catch(err => {
        console.error('Error updating order:', err);
        error.value = 'An error occurred during order update.';
      });
  };
  </script>
  
  <style scoped>
  .form-label {
      font-weight: bold;
  }
  </style>
  