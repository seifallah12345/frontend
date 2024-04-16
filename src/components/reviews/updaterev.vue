<template>
    <div>
      <form @submit.prevent="getReviewDetails">
        <div class="mb-3">
          <label for="reviewId" class="form-label">Review ID</label>
          <input type="text" class="form-control" id="reviewId" v-model="reviewId">
        </div>
        <button type="submit" class="btn btn-primary">Get Review Details</button>
      </form>
  
      <div v-if="review">
        <h2>Review Details</h2>
        <form @submit.prevent="submitUpdate">
          <div class="mb-3">
            <label for="rating" class="form-label">Rating</label>
            <input type="number" class="form-control" id="rating" v-model="review.rating">
          </div>
          <div class="mb-3">
            <label for="comment" class="form-label">Comment</label>
            <textarea class="form-control" id="comment" v-model="review.comment"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Update Review</button>
        </form>
      </div>
  
      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import useReviews from '@/components/services/servicesreveiwes.js';
  
  const { getReviewById, updateReview } = useReviews();
  const reviewId = ref('');
  const review = ref(null);
  const error = ref('');
  
  const getReviewDetails = () => {
    error.value = '';
  
    getReviewById(reviewId.value)
      .then(reviewData => {
        review.value = reviewData.data;
      })
      .catch(err => {
        console.error('Error fetching review details:', err);
        error.value = 'Unable to retrieve review details.';
      });
  };
  
  const submitUpdate = () => {
    error.value = '';
  
    updateReview(reviewId.value, review.value)
      .then(() => {
        // Refresh logic or navigation
      })
      .catch(err => {
        console.error('Error updating review:', err);
        error.value = 'An error occurred during review update.';
      });
  };
  </script>
  
  <style scoped>
  .form-label {
      font-weight: bold;
  }
  </style>
  