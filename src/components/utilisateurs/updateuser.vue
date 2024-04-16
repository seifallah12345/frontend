<template>
    <div>
      <form @submit.prevent="getUserDetails">
        <div class="mb-3">
          <label for="userId" class="form-label">User ID</label>
          <input type="text" class="form-control" id="userId" v-model="userId">
        </div>
        <button type="submit" class="btn btn-primary">Get User Details</button>
      </form>
  
      <div v-if="user">
        <h2>User Details</h2>
        <form @submit.prevent="submitUpdate">
          <div class="mb-3">
            <label for="nom" class="form-label">Nom</label>
            <input type="text" class="form-control" id="nom" v-model="user.nom">
          </div>
          <div class="mb-3">
            <label for="prenom" class="form-label">Prénom</label>
            <input type="text" class="form-control" id="prenom" v-model="user.prenom">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="user.email">
          </div>
          <div class="mb-3">
            <label for="date_de_naissance" class="form-label">Date de naissance</label>
            <input type="date" class="form-control" id="date_de_naissance" v-model="user.date_de_naissance">
          </div>
          <div class="mb-3">
            <label for="telephone" class="form-label">Téléphone</label>
            <input type="tel" class="form-control" id="telephone" v-model="user.telephone">
          </div>
          <!-- Add more input fields for other user details as needed -->
          <button type="submit" class="btn btn-primary">Mettre à jour</button>
        </form>
      </div>
  
      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import useUtilisateur from '@/components/services/serviceuser.js';
  
  const { getUserById, updateUser } = useUtilisateur();
  const router = useRouter();
  const userId = ref('');
  const user = ref(null);
  const error = ref('');
  
  const getUserDetails = () => {
    error.value = ''; // Reset error message
    
    getUserById(userId.value)
      .then(userData => {
        user.value = userData.data;
      })
      .catch(err => {
        console.error('Error fetching user details:', err);
        error.value = 'Impossible de récupérer les informations de l\'utilisateur.'; // Set error message
      });
  };
  
  const submitUpdate = () => {
    error.value = ''; // Reset error message
    
    updateUser(userId.value, user.value)
      .then(() => {
        router.push(`/get-user-by-id/${userId.value}`); // Redirect to user details page after update
      })
      .catch(err => {
        console.error('Error updating user:', err);
        error.value = 'Une erreur s\'est produite lors de la mise à jour de l\'utilisateur.'; // Set error message
      });
  };
  </script>
  
  <style scoped>
  .form-label {
    font-weight: bold;
  }
  
  /* Add your custom styles as needed */
  </style>
  