<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="permissionId" class="form-label">Permission ID</label>
        <input type="text" class="form-control" id="permissionId" v-model="permissionId">
      </div>
      <button type="submit" class="btn btn-primary">Get Permission</button>
    </form>

    <div v-if="permission">
      <h2>Permission Details</h2>
      <p><strong>Name:</strong> {{ permission.permissionName }}</p>
      <!-- Add more permission details as needed -->
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import usePermissions from '@/components/services/servicepermission.js';

const { getPermissionById } = usePermissions();

const route = useRoute();
const permissionId = ref(route.params.permissionId || '');
const permission = ref(null);

const submitForm = () => {
  getPermissionById(permissionId.value)
    .then(permissionData => {
      // Make sure permissionData is an object with the expected structure
      permission.value = permissionData.data; // Assuming permission data is in the `data` property
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
