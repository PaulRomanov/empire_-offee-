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
import { useRouter } from 'vue-router';
import users from '@/assets/users.json'; 
import type { User } from '@/types/user'; /

const login = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();

const authenticate = () => {
  const user = (users as User[]).find(
    (u) => u.credentials.username === login.value && u.credentials.passphrase === password.value
  );

  if (user) {
    // Сохранение сессии
    localStorage.setItem('isAuthenticated', 'true');
    router.push('/account');
  } else {
    error.value = 'Введены неверные данные авторизации. Попробуйте ещё раз.';
  }
};
</script>