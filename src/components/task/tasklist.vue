<template>
    <div>
      <h1>Liste des Tâches</h1>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <router-link :to="`/get-task-by-id/${task.id}`">
            {{ task.taskName }} - Due: {{ task.dueDate }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onBeforeMount } from 'vue';
  import useTask from '@/components/services/servicetask.js';
  
  const { getAllTasks } = useTask();
  const tasks = ref([]);
  
  onBeforeMount(() => {
    getAllTasks()
      .then(response => {
        tasks.value = response.data;
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  });
  

  </script>
  
  <style scoped>
  /* Add your custom styles as needed */
  </style>
  