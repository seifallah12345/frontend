<template>
  <form @submit.prevent="submitForm">
    <div class="mb-3">
      <label for="orderNumber" class="form-label">Order Number</label>
      <input type="text" class="form-control" id="orderNumber" v-model="order.orderNumber">
    </div>
    
    <div class="mb-3">
      <label for="userId" class="form-label">User</label>
      <select class="form-control" id="userId" v-model="order.userId">
        <option disabled value="">Select a user</option>
        <option v-for="user in users" :key="user.id" :value="user.id">{{ user.nom }}</option>
      </select>
    </div>

    <div class="mb-3">
      <label for="paymentMethod" class="form-label">Payment Method</label>
      <select class="form-control" id="paymentMethod" v-model="order.paymentMethodId">
        <option disabled value="">Select a payment method</option>
        <option v-for="payment in payments" :key="payment.id" :value="payment.id">{{ payment.paymentMethod }}</option>
      </select>
    </div>

    <div class="mb-3">
      <label for="productId" class="form-label">Product</label>
      <select class="form-control" id="productId" v-model="order.productId">
        <option disabled value="">Select a product</option>
        <option v-for="product in products" :key="product.id" :value="product.id">{{ product.name }}</option>
      </select>
    </div>

    <div class="mb-3">
      <label for="street" class="form-label">Street</label>
      <input type="text" class="form-control" id="street" v-model="order.street">
    </div>

    <div class="mb-3">
      <label for="city" class="form-label">City</label>
      <input type="text" class="form-control" id="city" v-model="order.city">
    </div>

    <button type="submit" class="btn btn-primary">Add Order</button>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import useOrder from '@/components/services/servicerorder.js';
import useUtilisateur from '@/components/services/serviceuser.js';
import usePayments from '@/components/services/servicepayment.js';
import useProducts from '@/components/services/serviceproduct.js';

const { addOrder } = useOrder();
const { getAllUsers } = useUtilisateur();
const { getAllPayments } = usePayments();
const { getAllProducts } = useProducts();

const router = useRouter();
const users = ref([]);
const payments = ref([]);
const products = ref([]);
const order = ref({
  orderNumber: '',
  userId: null,
  paymentMethodId: null,
  productId: null,
  address: ''
});

onMounted(() => {
  getAllUsers().then(response => {
    users.value = response.data;
  }).catch(err => console.error('Error fetching users:', err));

  getAllPayments().then(response => {
    payments.value = response.data;
  }).catch(err => console.error('Error fetching payments:', err));

  getAllProducts().then(response => {
    products.value = response.data;
  }).catch(err => console.error('Error fetching products:', err));
});

const submitForm = () => {
  const orderData = {
    ...order.value
  };

  addOrder(orderData)
    .then(res => {
      console.log('Order added successfully:', res);
      router.push('/');
    })
    .catch(err => console.error('Error adding order:', err));
};
</script>
