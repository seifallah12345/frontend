<template>
    <form @submit.prevent="submitForm">
        <div class="mb-3">
            <label for="name" class="form-label">Product Name</label>
            <input type="text" class="form-control" id="name" v-model="product.name">
        </div>
        <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <input type="number" class="form-control" id="price" v-model="product.price" min="0">
        </div>
        <div class="mb-3">
            <label for="category" class="form-label">Category</label>
            <select class="form-control" id="category" v-model="product.categoryId">
                <option disabled value="">Select a Category</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">
                    {{ category.categoryName }}
                </option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Add Product</button>
    </form>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import useProduct from '@/components/services/serviceproduct.js';
import useCategory from '@/components/services/servicecateg.js';

const { addProduct } = useProduct();
const { getAllCategories } = useCategory();

const router = useRouter();
const product = ref({
    name: '',
    price: null,
    categoryId: null  // Adding categoryId to the product model
});
const categories = ref([]);

onMounted(() => {
    getAllCategories()
        .then(response => {
            categories.value = response.data;
        })
        .catch(err => {
            console.error('Error fetching categories:', err);
        });
});

const submitForm = () => {
    const productData = {
        name: product.value.name,
        price: product.value.price,
        categoryId: product.value.categoryId  // Ensure categoryId is included
    };

    addProduct(productData)
        .then(res => {
            console.log('Product added successfully:', res);
            router.push('/');
        })
        .catch(err => console.error('Error adding product:', err));
};
</script>
