<template>
    <div>
      <form @submit.prevent="getRoleDetails">
        <div class="mb-3">
          <label for="roleId" class="form-label">Role ID</label>
          <input type="text" class="form-control" id="roleId" v-model="roleId">
        </div>
        <button type="submit" class="btn btn-primary">Get Role Details</button>
      </form>
  
      <div v-if="role">
        <h2>Role Details</h2>
        <form @submit.prevent="submitUpdate">
          <div class="mb-3">
            <label for="nom" class="form-label">Name</label>
            <input type="text" class="form-control" id="nom" v-model="role.nom">
          </div>
          <button type="submit" class="btn btn-primary">Update Role</button>
        </form>
      </div>
  
      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import useRoles from '@/components/services/serviceroles.js';
  
  const { getRoleById, updateRole } = useRoles();
  const roleId = ref('');
  const role = ref(null);
  const error = ref('');
  
  const getRoleDetails = () => {
    error.value = '';
  
    getRoleById(roleId.value)
      .then(roleData => {
        role.value = roleData.data;
      })
      .catch(err => {
        console.error('Error fetching role details:', err);
        error.value = 'Unable to retrieve role details.';
      });
  };
  
  const submitUpdate = () => {
    error.value = '';
  
    updateRole(roleId.value, role.value)
      .then(() => {
        // Refresh logic or navigation
      })
      .catch(err => {
        console.error('Error updating role:', err);
        error.value = 'An error occurred during role update.';
      });
  };
  </script>
  
  <style scoped>
  .form-label {
      font-weight: bold;
  }
  </style>
  