// src/boot/router-guards.ts
import { boot } from 'quasar/wrappers'
import { useUserStore } from 'stores/user-store'


export default boot(({ router }) => {
  // `store` here IS the Pinia instance
  const userStore = useUserStore();

  router.beforeEach((to) => {
    if (to.meta.requiresAuth && !userStore.authenticated) {
      console.log('redirecting to login');
      return { name: 'login', query: { redirect: to.fullPath } };
    }
  })
})
