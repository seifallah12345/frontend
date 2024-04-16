<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="taskId" class="form-label">Task ID</label>
        <input type="text" class="form-control" id="taskId" v-model="taskId">
      </div>
      <button type="submit" class="btn btn-primary">Get Task</button>
    </form>

    <div v-if="task">
      <h2>Task Details</h2>
      <p><strong>Task Name:</strong> {{ task.taskName }}</p>
      <p><strong>Due Date:</strong> {{ task.dueDate }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import useTasks from '@/components/services/servicetask.js';

const { getTaskById } = useTasks();
const taskId = ref('');

const task = ref(null);

const submitForm = () => {
  getTaskById(taskId.value)
    .then(taskData => {
      task.value = taskData.data; // Assuming task data is structured properly in the response
    })
    .catch(err => {
      console.error('Error fetching task:', err);
      // Optionally handle the error, e.g., by showing an error message
    });
};
</script>
<style scoped>
.form-label {
  font-weight: bold;
}

/* Additional custom styles can be added as needed */
</style>

