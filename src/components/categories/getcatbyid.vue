<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="categoryId" class="form-label">Category ID</label>
        <input type="text" class="form-control" id="categoryId" v-model="categoryId">
      </div>
      <button type="submit" class="btn btn-primary">Get Category</button>
    </form>

    <div v-if="category">
      <h2>Category Details</h2>
      <p><strong>Category Name:</strong> {{ category?.categoryName }}</p>
      <!-- Add more category details as needed -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import useCategory from '@/components/services/servicecateg.js';

const { getCategoryById } = useCategory();

const route = useRoute();
const categoryId = ref(route.params.categoryId);
const category = ref(null);

const submitForm = () => {
  getCategoryById(categoryId.value)
    .then(categoryData => {
      // Make sure categoryData is an object with the expected structure
      category.value = categoryData.data; // Assuming category data is in the `data` property
    })
    .catch(err => {
      console.error('Error:', err);
      // Handle error (e.g., show error message to user)
    });
};
</script>

<style scoped>
.form-label {
  font-weight: bold;
}

/* Add your custom styles as needed */
</style>
