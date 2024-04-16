<template>
    <div>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="productId" class="form-label">Product ID</label>
          <input type="text" class="form-control" id="productId" v-model="productId">
        </div>
        <button type="submit" class="btn btn-danger">Delete Product</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import useProduct from '@/components/services/serviceproduct.js';
  
  const { deleteProduct: deleteProductAPI } = useProduct(); 
  
  const router = useRouter();
  const productId = ref('');
  
  const submitForm = () => {
    deleteProductAPI(productId.value) 
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
  