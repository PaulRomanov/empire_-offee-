<template>
  <div>
    <h1>Страница аккаунта</h1>
    <button @click="logout">Выйти</button>

    <div>
      <h2>Фильтры</h2>
      <select v-model="filters.category" multiple>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
      <input type="date" v-model="filters.date" />
      <button @click="resetFilters">Сбросить фильтры</button>
    </div>

    <ProductTable :products="products" :filters="filters" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Ref, ComputedRef } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import productsData from '@/assets/products.json';
import ProductTable from '@/components/ProductTable.vue';
import type { Product } from '@/types/product';

const router = useRouter();
const authStore = useAuthStore();
const products: Product[] = productsData;

const logout = () => {
  authStore.logout();
  router.push('/');
};

interface Filters {
  category: string[];
  date: string;
}

const filters: Ref<Filters> = ref({
  category: [],
  date: '',
});

const categories: ComputedRef<string[]> = computed(() => {
  return [...new Set(products.map((product) => product.category))];
});

const resetFilters = () => {
  filters.value = {
    category: [],
    date: '',
  };
};
</script>