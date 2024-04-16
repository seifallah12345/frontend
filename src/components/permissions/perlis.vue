<template>
    <div>
      <h1>Liste des Permissions</h1>
      <ul>
        <li v-for="permission in permissions" :key="permission.id">
          <router-link :to="`/get-permission-by-id/${permission.id}`">
            {{ permission.permissionName }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onBeforeMount } from 'vue';
  import usePermission from '@/components/services/servicepermission.js';
  
  const { getAllPermissions } = usePermission();
  const permissions = ref([]);
  
  onBeforeMount(() => {
    getAllPermissions()
      .then(response => {
        permissions.value = response.data;
      })
      .catch(error => {
        console.error('Error fetching permissions:', error);
      });
  });
  </script>
  
  <style scoped>
  /* Add your custom styles as needed */
  </style>
  