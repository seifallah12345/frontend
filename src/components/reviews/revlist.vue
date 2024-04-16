<template>
    <div>
      <h1>Liste des Avis</h1>
      <ul>
        <li v-for="review in reviews" :key="review.id">
          <router-link :to="`/get-review-by-id/${review.id}`">
            {{ review.comment }} - {{ review.rating }} stars
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onBeforeMount } from 'vue';
  import useReview from '@/components/services/servicesreveiwes.js'; // Assuming correct file name
  
  const { getAllReviews } = useReview();
  const reviews = ref([]);
  
  onBeforeMount(() => {
    getAllReviews()
      .then(response => {
        reviews.value = response.data;
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  });
  </script>
  
  <style scoped>
  /* Add your custom styles as needed */
  </style>
  