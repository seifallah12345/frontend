<template>
    <div>
      <form @submit.prevent="getAddressDetails">
        <div class="mb-3">
          <label for="addressId" class="form-label">Address ID</label>
          <input type="text" class="form-control" id="addressId" v-model="addressId">
        </div>
        <button type="submit" class="btn btn-primary">Get Address Details</button>
      </form>

      <div v-if="address">
        <h2>Address Details</h2>
        <form @submit.prevent="submitUpdate">
          <div class="mb-3">
            <label for="street" class="form-label">Street</label>
            <input type="text" class="form-control" id="street" v-model="address.street">
          </div>
          <div class="mb-3">
            <label for="city" class="form-label">City</label>
            <input type="text" class="form-control" id="city" v-model="address.city">
          </div>
          <button type="submit" class="btn btn-primary">Update Address</button>
        </form>
      </div>

      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import useAddress from '@/components/services/serviceaddress.js';

const { getAddressById, updateAddress } = useAddress();
const addressId = ref('');
const address = ref(null);
const error = ref('');

const getAddressDetails = () => {
  error.value = '';

  getAddressById(addressId.value)
    .then(addressData => {
      address.value = addressData.data;
    })
    .catch(err => {
      console.error('Error fetching address details:', err);
      error.value = 'Unable to retrieve address details.';
    });
};

const submitUpdate = () => {
  error.value = '';

  updateAddress(addressId.value, address.value)
    .then(() => {
      // Redirect or refresh logic here
    })
    .catch(err => {
      console.error('Error updating address:', err);
      error.value = 'An error occurred during address update.';
    });
};
</script>

<style scoped>
.form-label {
    font-weight: bold;
}
</style>
