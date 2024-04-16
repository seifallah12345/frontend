<template>
    <div>
      <form @submit.prevent="getPermissionDetails">
        <div class="mb-3">
          <label for="permissionId" class="form-label">Permission ID</label>
          <input type="text" class="form-control" id="permissionId" v-model="permissionId">
        </div>
        <button type="submit" class="btn btn-primary">Get Permission Details</button>
      </form>
  
      <div v-if="permission">
        <h2>Permission Details</h2>
        <form @submit.prevent="submitUpdate">
          <div class="mb-3">
            <label for="permissionName" class="form-label">Permission Name</label>
            <input type="text" class="form-control" id="permissionName" v-model="permission.permissionName">
          </div>
          <button type="submit" class="btn btn-primary">Update Permission</button>
        </form>
      </div>
  
      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import usePermissions from '@/components/services/servicepermission.js';
  
  const { getPermissionById, updatePermission } = usePermissions();
  const permissionId = ref('');
  const permission = ref(null);
  const error = ref('');
  
  const getPermissionDetails = () => {
    error.value = '';
  
    getPermissionById(permissionId.value)
      .then(permissionData => {
        permission.value = permissionData.data;
      })
      .catch(err => {
        console.error('Error fetching permission details:', err);
        error.value = 'Unable to retrieve permission details.';
      });
  };
  
  const submitUpdate = () => {
    error.value = '';
  
    updatePermission(permissionId.value, permission.value)
      .then(() => {
        // Refresh logic or navigation
      })
      .catch(err => {
        console.error('Error updating permission:', err);
        error.value = 'An error occurred during permission update.';
      });
  };
  </script>
  
  <style scoped>
  .form-label {
      font-weight: bold;
  }
  </style>
  