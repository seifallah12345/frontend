<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="roleId" class="form-label">Role ID</label>
        <input type="text" class="form-control" id="roleId" v-model="roleId">
      </div>
      <button type="submit" class="btn btn-primary">Get Role</button>
    </form>

    <div v-if="role">
      <h2>Role Details</h2>
      <p><strong>Nom:</strong> {{ role?.nom }}</p>
      <!-- Add more role details as needed -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import useRole from '@/components/services/serviceroles.js';

const { getRoleById } = useRole();

const route = useRoute();
const roleId = ref(route.params.roleId);
const role = ref(null);

const submitForm = () => {
  getRoleById(roleId.value)
    .then(roleData => {
      // Make sure roleData is an object with the expected structure
      role.value = roleData.data; // Assuming role data is in the `data` property
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
