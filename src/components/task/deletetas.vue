<template>
    <div>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="taskId" class="form-label">Task ID</label>
          <input type="text" class="form-control" id="taskId" v-model="taskId">
        </div>
        <button type="submit" class="btn btn-danger">Delete Task</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import useTask from '@/components/services/servicetask.js';
  
  const { deleteTask: deleteTaskAPI } = useTask(); 
  
  const router = useRouter();
  const taskId = ref('');
  
  const submitForm = () => {
    deleteTaskAPI(taskId.value) 
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
  