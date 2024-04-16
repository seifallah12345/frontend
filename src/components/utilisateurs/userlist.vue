<template>
  <div>
    <h1>Liste des Utilisateurs</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <router-link :to="`/get-user-by-id/${user.id}`">
          {{ user.nom }} {{ user.prenom }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import useUtilisateur from '@/components/services/serviceuser.js';

const { getAllUsers } = useUtilisateur();
const router = useRouter();
const users = ref([]);

onBeforeMount(() => {
  fetchUsers();
});

const fetchUsers = () => {
  getAllUsers()
    .then(response => {
      users.value = response.data;
    })
    .catch(error => {
      console.error('Error fetching users:', error);
    });
};
</script>

<style scoped>
/* Add your custom styles as needed */
</style>
