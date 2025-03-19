<template>
  <div>
    <p>страница аккаунта</p>
    <button @click="logout">Выйти</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';

const router = useRouter();
const authStore = useAuthStore();

const logout = () => {
  authStore.logout();
  router.push('/');
};
</script>