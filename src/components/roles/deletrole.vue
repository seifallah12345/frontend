<template>
    <div>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="roleId" class="form-label">Role ID</label>
          <input type="text" class="form-control" id="roleId" v-model="roleId">
        </div>
        <button type="submit" class="btn btn-danger">Delete Role</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import useRoles from '@/components/services/serviceroles.js';
  
  const { deleteRole: deleteRoleAPI } = useRoles(); 
  
  const router = useRouter();
  const roleId = ref('');
  
  const submitForm = () => {
    deleteRoleAPI(roleId.value) 
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
  