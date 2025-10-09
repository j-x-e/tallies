import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    authenticated: false,
  }),
  actions: {
    tempLogin (email: string, password: string) {
      console.log(email, password);
      this.authenticated = true;
    },
    logout () {
      this.authenticated = false;
    }
  },
})