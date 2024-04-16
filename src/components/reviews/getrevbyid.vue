<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="reviewId" class="form-label">Review ID</label>
        <input type="text" class="form-control" id="reviewId" v-model="reviewId">
      </div>
      <button type="submit" class="btn btn-primary">Get Review</button>
    </form>

    <div v-if="review">
      <h2>Review Details</h2>
      <p><strong>Rating:</strong> {{ review.rating }}</p>
      <p><strong>Comment:</strong> {{ review.comment }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import useReviews from '@/components/services/servicesreveiwes.js';

const { getReviewById } = useReviews();
const reviewId = ref('');

const review = ref(null);

const submitForm = () => {
  getReviewById(reviewId.value)
    .then(reviewData => {
      // Assuming review data is structured properly in the response
      review.value = reviewData.data;
    })
    .catch(err => {
      console.error('Error fetching review:', err);
      // Optionally handle the error, e.g., by showing a notification
    });
};
</script>
<style scoped>
.form-label {
  font-weight: bold;
}

/* You can add more custom styles as needed */
</style>
