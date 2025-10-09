<script setup lang="ts">
import { useUserStore } from 'src/stores/user-store';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

function handleLogout() {
  userStore.logout();
  return router.push({ name: 'login' });
}
</script>

<template>
  <q-btn flat dense type="submit" label="Logout" icon="logout" @click="handleLogout" />
</template>
