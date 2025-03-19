<template>
  <div>
    <h1>Страница идентификации</h1>
    <input v-model="login" placeholder="Логин" />
    <input v-model="password" type="password" placeholder="Пароль" />
    <button @click="authenticate">Войти</button>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';

const login: Ref<string> = ref('');
const password: Ref<string> = ref('');
const error: Ref<string> = ref('');
const router = useRouter();
const authStore = useAuthStore();

const authenticate = async () => {
  try {
    await authStore.login(login.value, password.value);
    router.push('/account');
  } catch (err: any) {
    error.value = err.message;
  }
};
</script>