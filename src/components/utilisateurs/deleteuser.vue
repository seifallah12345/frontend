<template>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="userId" class="form-label">User ID</label>
        <input type="text" class="form-control" id="userId" v-model="userId">
      </div>
      <button type="submit" class="btn btn-danger">Delete User</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import useUtilisateur from '@/components/services/serviceuser.js';
  
  const { deleteUser: deleteUserAPI } = useUtilisateur(); // Rename deleteUser to avoid conflict
  
  const router = useRouter();
  const userId = ref('');
  
  const submitForm = () => { // Rename deleteUser to submitForm
    deleteUserAPI(userId.value) // Use deleteUserAPI instead of deleteUser
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
  