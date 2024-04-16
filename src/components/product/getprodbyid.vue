<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="productId" class="form-label">Product ID</label>
        <input type="text" class="form-control" id="productId" v-model="productId">
      </div>
      <button type="submit" class="btn btn-primary">Get Product</button>
    </form>

    <div v-if="product">
      <h2>Product Details</h2>
      <p><strong>Name:</strong> {{ product.name }}</p>
      <p><strong>Price:</strong> {{ product.price }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import useProducts from '@/components/services/serviceproduct.js';

const { getProductById } = useProducts();
const productId = ref('');

const product = ref(null);

const submitForm = () => {
  getProductById(productId.value)
    .then(productData => {
      product.value = productData.data; // Assuming product data is in the `data` property
    })
    .catch(err => {
      console.error('Error fetching product:', err);
      // Optionally handle the error, e.g., by showing an error message
    });
};
</script>
<style scoped>
.form-label {
  font-weight: bold;
}

/* Additional styles can be added as needed */
</style>

