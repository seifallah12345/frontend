<template>
  <div>
    <h1>Liste des Rôles</h1>
    <ul>
      <li v-for="role in roles" :key="role.id">
        <router-link :to="`/get-role-by-id/${role.id}`">
          {{ role.nom }}
        </router-link>
      </li>
    </ul>
    <!-- Adding a debug message if roles are empty -->
    <p v-if="roles.length === 0">No roles found or waiting for response...</p>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import useRoles from '@/components/services/serviceroles.js';

const { getAllRoles } = useRoles();
const roles = ref([]);

onBeforeMount(() => {
  getAllRoles()
    .then(response => {
      console.log('Roles data:', response.data); // Debugging line to check the data
      roles.value = response.data;
    })
    .catch(error => {
      console.error('Error fetching roles:', error);
      alert('Failed to fetch roles. Check console for more details.'); // Alert for visible feedback
    });
});
</script>

<style scoped>
/* Add your custom styles as needed */
</style>
