<template>
    <div>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="reviewId" class="form-label">Review ID</label>
          <input type="text" class="form-control" id="reviewId" v-model="reviewId">
        </div>
        <button type="submit" class="btn btn-danger">Delete Review</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import useReview from '@/components/services/servicesreveiwes.js';
  
  const { deleteReview: deleteReviewAPI } = useReview(); 
  
  const router = useRouter();
  const reviewId = ref('');
  
  const submitForm = () => {
    deleteReviewAPI(reviewId.value) 
      .then(res => {
        console.log(res);
        router.push('/');
      })
      .catch(err => console.error('Error:', err));
  };
  </script>
  
  <style scoped>
  .form-label {
    font-weight: bold;
  }
  </style>
  