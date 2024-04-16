<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="userId" class="form-label">User ID</label>
        <input type="text" class="form-control" id="userId" v-model="userId">
      </div>
      <button type="submit" class="btn btn-primary">Get User</button>
    </form>

    <div v-if="user">
      <h2>User Details</h2>
      <p><strong>Nom:</strong> {{ user?.nom }}</p>
      <p><strong>Prénom:</strong> {{ user?.prenom }}</p>
      <p><strong>Email:</strong> {{ user?.email }}</p>
      <p><strong>Date de naissance:</strong> {{ user?.date_de_naissance }}</p>
      <p><strong>Téléphone:</strong> {{ user?.telephone }}</p>
      <!-- Add more user details as needed -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import useUtilisateur from '@/components/services/serviceuser.js';

const { getUserById } = useUtilisateur();

const route = useRoute();
const userId = ref(route.params.userId);
const user = ref(null);

const submitForm = () => {
  getUserById(userId.value)
    .then(userData => {
      // Make sure userData is an object with the expected structure
      user.value = userData.data; // Assuming user data is in the `data` property
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
