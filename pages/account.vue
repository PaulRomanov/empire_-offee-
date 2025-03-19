<template>
  <div class="account-page">
    <h1 class="account-page__title">Страница аккаунта</h1>
    <Button type="primary" @click="logout" class="account-page__logout-button">Выйти</Button>

    <div class="account-page__filters">
      <h2 class="account-page__filters-title">Фильтры</h2>
      <select v-model="filters.category" multiple class="account-page__filter-select">
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
      <input type="date" v-model="filters.date" class="account-page__filter-date" />
      <Button type="primary" @click="resetFilters" class="account-page__filter-reset">Сбросить фильтры</Button>
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
import Button from '@/components/Button.vue';
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

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.account-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  &__title {
    margin-bottom: 20px;
  }

  &__filters {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  &__filters-title {
    text-align: center;
    margin-bottom: 10px;
  }

  &__filter-select,
  &__filter-date {
    padding: 10px;
    margin-right: 10px;
    border: 1px solid $color-quaternary;
    background-color: $color-secondary;
    color: $color-font-primary;
  }
}
</style>