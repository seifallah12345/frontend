<template>
    <div>
      <form @submit.prevent="getTaskDetails">
        <div class="mb-3">
          <label for="taskId" class="form-label">Task ID</label>
          <input type="text" class="form-control" id="taskId" v-model="taskId">
        </div>
        <button type="submit" class="btn btn-primary">Get Task Details</button>
      </form>
  
      <div v-if="task">
        <h2>Task Details</h2>
        <form @submit.prevent="submitUpdate">
          <div class="mb-3">
            <label for="taskName" class="form-label">Task Name</label>
            <input type="text" class="form-control" id="taskName" v-model="task.taskName">
          </div>
          <div class="mb-3">
            <label for="dueDate" class="form-label">Due Date</label>
            <input type="date" class="form-control" id="dueDate" v-model="task.dueDate">
          </div>
          <button type="submit" class="btn btn-primary">Update Task</button>
        </form>
      </div>
  
      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import useTasks from '@/components/services/servicetask.js'; // Adapt path and name as needed
  
  const { getTaskById, updateTask } = useTasks();
  const taskId = ref('');
  const task = ref(null);
  const error = ref('');
  
  const getTaskDetails = () => {
    error.value = '';
  
    getTaskById(taskId.value)
      .then(taskData => {
        task.value = taskData.data;
      })
      .catch(err => {
        console.error('Error fetching task details:', err);
        error.value = 'Unable to retrieve task details.';
      });
  };
  
  const submitUpdate = () => {
    error.value = '';
  
    updateTask(taskId.value, task.value)
      .then(() => {
        // Refresh logic or navigation
      })
      .catch(err => {
        console.error('Error updating task:', err);
        error.value = 'An error occurred during task update.';
      });
  };
  </script>
  
  <style scoped>
  .form-label {
      font-weight: bold;
  }
  </style>
  