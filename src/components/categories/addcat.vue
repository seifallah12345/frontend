<template>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="categoryName" class="form-label">Category Name</label>
        <input type="text" class="form-control" id="categoryName" v-model="category.categoryName">
      </div>
      <button type="submit" class="btn btn-primary">Add Category</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import useCategory from '@/components/services/servicecateg.js';
  
  const { addCategory } = useCategory();
  
  const router = useRouter();
  const category = ref({
    categoryName: ''
  });
  
  const submitForm = () => {
    const categoryData = {
      categoryName: category.value.categoryName
    };
  
    addCategory(categoryData)
      .then(res => {
        console.log(res);
        router.push('/');
      })
      .catch(err => console.error('Error:', err));
  };
  </script>
  