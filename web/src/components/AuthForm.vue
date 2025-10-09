<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from 'src/stores/user-store';

const router = useRouter();
const userStore = useUserStore();

const email = ref('');
const firstname = ref('');
const lastname = ref('');
const username = ref('');
const password = ref('');

function onSubmit() {
  userStore.email = email.value;
  userStore.firstName = firstname.value;
  userStore.lastName = lastname.value;
  userStore.username = username.value;

  userStore.tempLogin(email.value, password.value);

  if (userStore.authenticated) {
    return router.push({ name: 'home' });
  }

  console.log('Email:', email.value);
  console.log('Password:', password.value);
}
</script>

<template>
  <q-form class="column q-pa-md q-gutter-y" @submit="onSubmit">
    <q-input v-model="email" label="Email" type="email" />
    <q-input v-model="firstname" label="First name" type="text" />
    <q-input v-model="lastname" label="Last name" type="text" />
    <q-input v-model="username" label="Username" type="text" />
    <q-input v-model="password" label="Password" type="password" disable />
    <q-checkbox
      v-model="userStore.authenticated"
      :label="`Authenticated: ${userStore.authenticated}`"
    />
    <q-btn type="submit" label="Login" color="primary" />
  </q-form>
</template>
