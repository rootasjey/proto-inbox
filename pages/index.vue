<script lang="ts" setup>
import { collection } from '@firebase/firestore';

const db = useFirestore()
const realtors = useCollection(collection(db, "realtors"))
</script>

<template>
  <h1>Proto inbox 2</h1>
  <span>collection new</span>
  <li v-for="realtor in realtors" :key="realtor.id">
    <span>{{ realtor.name }}</span>
  </li>
</template>