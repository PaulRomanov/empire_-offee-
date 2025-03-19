<template>
  <div class="product-table">
    <table class="product-table__table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Status</th>
          <th>Date Created</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredProducts" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.status }}</td>
          <td>{{ product.date_created }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ComputedRef } from '@vue/reactivity';
import type { Product } from '@/types/product';

interface Filters {
  category: string[];
  date: string;
}

interface ProductTableProps {
  products: Product[];
  filters: Filters;
}

const props = defineProps<ProductTableProps>(); 

const filteredProducts: ComputedRef<Product[]> = computed(() => {
  return props.products.filter((product) => {
    if (props.filters.category && props.filters.category.length > 0 && !props.filters.category.includes(product.category)) {
      return false;
    }
    if (props.filters.date && product.date_created !== props.filters.date) {
      return false;
    }
    return true;
  });
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.product-table {
  &__table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      border: 1px solid $color-quaternary;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: $color-tertiary;
    }
  }
}
</style>