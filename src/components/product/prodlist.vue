<template>
    <div>
      <h1>Liste des Produits</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          <router-link :to="`/get-product-by-id/${product.id}`">
            {{ product.name }} - {{ product.price}}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onBeforeMount } from 'vue';
  import useProduct from '@/components/services/serviceproduct.js';
  
  const { getAllProducts } = useProduct();
  const products = ref([]);
  
  onBeforeMount(() => {
    getAllProducts()
      .then(response => {
        products.value = response.data;
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  });
  
  </script>
  
  <style scoped>
  /* Add your custom styles as needed */
  </style>
  