<script setup lang="ts">
import Avatar from "../Avatar.vue";
</script>

<template>
  <div class="grid gap-4 grid-cols-4">
    <div
      class="p-6 bg-white border rounded-md flex flex-col items-center"
      v-for="i in 5"
    >
      <Avatar size="64px" url="" />
      <h3 class="text-lg font-bold text-blue-600 mt-2">Ngo Phuoc Loi</h3>
    </div>
  </div>
</template>
