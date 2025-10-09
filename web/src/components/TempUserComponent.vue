<script setup lang="ts">
import { useUserStore } from 'stores/user-store';

const userStore = useUserStore();
</script>

<template>
  <h1>{{ userStore.firstName + userStore.lastName }}</h1>
  <h2>{{ userStore.email }}</h2>

  <q-card>
    <q-card-section>
      <div class="text-h6">Database data</div>
    </q-card-section>
    <q-card-section>
      <table>
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>foo</td>
            <td>bar</td>
            <td>baz</td>
            <td>quux</td>
          </tr>
        </tbody>
      </table>
    </q-card-section>
  </q-card>
</template>
