<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="categoryId" class="form-label">Category ID</label>
        <input type="text" class="form-control" id="categoryId" v-model="categoryId">
      </div>
      <button type="submit" class="btn btn-danger">Delete Category</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useCategory from '@/components/services/servicecateg.js';

const { deleteCategory: deleteCategoryAPI } = useCategory(); // Rename deleteCategory to avoid conflict

const router = useRouter();
const categoryId = ref('');

const submitForm = () => {
  deleteCategoryAPI(categoryId.value) // Use deleteCategoryAPI instead of deleteCategory
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
