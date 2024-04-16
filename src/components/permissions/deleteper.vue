<template>
    <div>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="permissionId" class="form-label">Permission ID</label>
          <input type="text" class="form-control" id="permissionId" v-model="permissionId">
        </div>
        <button type="submit" class="btn btn-danger">Delete Permission</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import usePermission from '@/components/services/servicepermission.js';
  
  const { deletePermission: deletePermissionAPI } = usePermission(); 
  
  const router = useRouter();
  const permissionId = ref('');
  
  const submitForm = () => {
    deletePermissionAPI(permissionId.value) 
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
  