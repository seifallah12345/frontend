<template>
    <div>
      <h1>Liste des Catégories</h1>
      <ul>
        <li v-for="category in categories" :key="category.id">
          <router-link :to="`/get-category-by-id/${category.id}`">
            {{ category.categoryName }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onBeforeMount } from 'vue';
  import useCategory from '@/components/services/servicecateg.js';
  
  const { getAllCategories } = useCategory();
  const categories = ref([]);
  
  onBeforeMount(() => {
    getAllCategories()
      .then(response => {
        categories.value = response.data; // Adjust if your API structure is different
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  });
  </script>
  
  <style scoped>
  /* Add your custom styles as needed */
  </style>
  