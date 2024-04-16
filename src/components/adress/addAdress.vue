<template>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="street" class="form-label">Street</label>
        <input type="text" class="form-control" id="street" v-model="address.street">
      </div>
      <div class="mb-3">
        <label for="city" class="form-label">City</label>
        <input type="text" class="form-control" id="city" v-model="address.city">
      </div>
      <button type="submit" class="btn btn-primary">Add Address</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import useAddress from '@/components/services/serviceaddress.js';
  
  const { addAddress } = useAddress();
  
  const router = useRouter();
  const address = ref({
    street: '',
    city: ''
  });
  
  const submitForm = () => {
    const addressData = {
      street: address.value.street,
      city: address.value.city
    };
  
    addAddress(addressData)
      .then(res => {
        console.log(res);
        router.push('/');
      })
      .catch(err => console.error('Error:', err));
  };
  </script>
  