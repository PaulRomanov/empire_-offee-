import { defineStore } from 'pinia';
import type { User } from '@/types/user';
import users from '@/assets/users.json';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    isAuthenticated: process.client ? localStorage.getItem('isAuthenticated') === 'true' : false,
    user: null,
  }),
  actions: {
    login(login, password) {
      const user = (users as User[]).find(
        (u) => u.credentials.username === login && u.credentials.passphrase === password
      );

      if (user) {
        this.isAuthenticated = true;
        this.user = user;
        if (process.client) {
          localStorage.setItem('isAuthenticated', 'true');
        }
      } else {
        this.isAuthenticated = false;
        this.user = null;
        if (process.client) {
          localStorage.removeItem('isAuthenticated');
        }
        throw new Error('Введены неверные данные авторизации. Попробуйте ещё раз');
      }
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
      if (process.client) {
        localStorage.removeItem('isAuthenticated');
      }
    },
  },
});