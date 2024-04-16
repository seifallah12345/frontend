<template>
    <div>
      <div v-if="user">
        <h2>User Details</h2>
        <p><strong>Nom:</strong> {{ user.nom }}</p>
        <p><strong>Prénom:</strong> {{ user.prenom }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Date de naissance:</strong> {{ user.date_de_naissance }}</p>
        <p><strong>Téléphone:</strong> {{ user.telephone }}</p>
        <!-- Add more user details as needed -->
      </div>
      <div v-else>
        <p>User not found or no user ID specified.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import useUtilisateur from '@/components/services/serviceuser.js';
  
  const { getUserById } = useUtilisateur();
  const route = useRoute();
  const user = ref(null);
  
  onMounted(() => {
    const userId = route.params.userId; // Get user ID from route parameters
    if (userId) {
      getUserById(userId)
        .then(response => {
          user.value = response.data;
        })
        .catch(err => {
          console.error('Error fetching user:', err);
        });
    }
  });
  </script>
  
  <style scoped>
  .form-label {
    font-weight: bold;
  }
  </style>
  