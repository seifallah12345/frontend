<template>
    <div>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="addressId" class="form-label">Address ID</label>
          <input type="text" class="form-control" id="addressId" v-model="addressId">
        </div>
        <button type="submit" class="btn btn-danger">Delete Address</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import useAddress from '@/components/services/serviceaddress.js';
  
  const { deleteAddress: deleteAddressAPI } = useAddress(); 
  
  const router = useRouter();
  const addressId = ref('');
  
  const submitForm = () => {
    deleteAddressAPI(addressId.value) 
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
  ``
  