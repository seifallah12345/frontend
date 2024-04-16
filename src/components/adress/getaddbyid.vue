<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="addressId" class="form-label">Address ID</label>
        <input type="text" class="form-control" id="addressId" v-model="addressId">
      </div>
      <button type="submit" class="btn btn-primary">Get Address</button>
    </form>

    <div v-if="address">
      <h2>Address Details</h2>
      <p><strong>Street:</strong> {{ address?.street }}</p>
      <p><strong>City:</strong> {{ address?.city }}</p>
      <!-- Add more address details as needed -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import useAddress from '@/components/services/serviceaddress.js';

const { getAddressById } = useAddress();

const route = useRoute();
const addressId = ref(route.params.addressId);
const address = ref(null);

const submitForm = () => {
  getAddressById(addressId.value)
    .then(addressData => {
      // Make sure addressData is an object with the expected structure
      address.value = addressData.data; // Assuming address data is in the `data` property
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
