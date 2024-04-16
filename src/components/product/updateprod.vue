<template>
    <div>
      <form @submit.prevent="getProductDetails">
        <div class="mb-3">
          <label for="productId" class="form-label">Product ID</label>
          <input type="text" class="form-control" id="productId" v-model="productId">
        </div>
        <button type="submit" class="btn btn-primary">Get Product Details</button>
      </form>
  
      <div v-if="product">
        <h2>Product Details</h2>
        <form @submit.prevent="submitUpdate">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" v-model="product.name">
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <input type="number" class="form-control" id="price" v-model="product.price">
          </div>
          <button type="submit" class="btn btn-primary">Update Product</button>
        </form>
      </div>
  
      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import useProducts from '@/components/services/serviceproduct.js';
  
  const { getProductById, updateProduct } = useProducts();
  const productId = ref('');
  const product = ref(null);
  const error = ref('');
  
  const getProductDetails = () => {
    error.value = '';
  
    getProductById(productId.value)
      .then(productData => {
        product.value = productData.data;
      })
      .catch(err => {
        console.error('Error fetching product details:', err);
        error.value = 'Unable to retrieve product details.';
      });
  };
  
  const submitUpdate = () => {
    error.value = '';
  
    updateProduct(productId.value, product.value)
      .then(() => {
        // Refresh logic or navigation
      })
      .catch(err => {
        console.error('Error updating product:', err);
        error.value = 'An error occurred during product update.';
      });
  };
  </script>
  
  <style scoped>
  .form-label {
      font-weight: bold;
  }
  </style>
  