<template>
  <div class="login-page">
    <h1 class="login-page__title">Страница идентификации</h1>
    <input v-model="login" placeholder="Логин" class="login-page__input" />
    <input v-model="password" type="password" placeholder="Пароль" class="login-page__input" />
    <Button type="primary" @click="authenticate" class="login-page__button">Войти</Button>
    <p v-if="error" class="login-page__error">{{ error }}</p>
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

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  &__title {
    margin-bottom: 20px;
  }

  &__input {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid $color-quaternary;
    background-color: $color-secondary;
    color: $color-font-primary;
  }

  &__error {
    color: $color-red;
    margin-top: 10px;
  }
}
</style>