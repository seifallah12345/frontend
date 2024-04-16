<template>
    <div>
      <form @submit.prevent="getCategoryDetails">
        <div class="mb-3">
          <label for="categoryId" class="form-label">Category ID</label>
          <input type="text" class="form-control" id="categoryId" v-model="categoryId">
        </div>
        <button type="submit" class="btn btn-primary">Get Category Details</button>
      </form>
  
      <div v-if="category">
        <h2>Category Details</h2>
        <form @submit.prevent="submitUpdate">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" v-model="category.categoryName">
          </div>
          <button type="submit" class="btn btn-primary">Update Category</button>
        </form>
      </div>
  
      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import useCateg from '@/components/services/servicecateg.js';
  
  const { getCategoryById, updateCategory } = useCateg();
  const categoryId = ref('');
  const category = ref(null);
  const error = ref('');
  
  const getCategoryDetails = () => {
    error.value = '';
  
    getCategoryById(categoryId.value)
      .then(categoryData => {
        category.value = categoryData.data;
      })
      .catch(err => {
        console.error('Error fetching category details:', err);
        error.value = 'Unable to retrieve category details.';
      });
  };
  
  const submitUpdate = () => {
    error.value = '';
  
    updateCategory(categoryId.value, category.value)
      .then(() => {
        // Refresh logic or navigation
      })
      .catch(err => {
        console.error('Error updating category:', err);
        error.value = 'An error occurred during category update.';
      });
  };
  </script>
  
  <style scoped>
  .form-label {
      font-weight: bold;
  }
  </style>
  