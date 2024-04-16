<template>
    <form @submit.prevent="submitForm">
        <div class="mb-3">
            <label for="rating" class="form-label">Rating</label>
            <input type="number" class="form-control" id="rating" v-model="review.rating" min="1" max="5">
        </div>
        <div class="mb-3">
            <label for="comment" class="form-label">Comment</label>
            <textarea class="form-control" id="comment" v-model="review.comment"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Add Review</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useReview from '@/components/services/servicesreveiwes.js';

const { addReview } = useReview();

const router = useRouter();
const review = ref({
    rating: null,
    comment: null
});

const submitForm = () => {
    const reviewData = {
        rating: review.value.rating,
        comment: review.value.comment
    };

    addReview(reviewData)
        .then(res => {
            console.log(res);
            router.push('/');
        })
        .catch(err => console.error('Error:', err));
};
</script>
