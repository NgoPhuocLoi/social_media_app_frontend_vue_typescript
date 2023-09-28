<script setup lang="ts">
import ref from "vue";
// import {} from "@/com"

// const posts = ref<Post>([]);
</script>

<template>
  <ul>
    <li v-for="i in 10" class="p-4 flex justify-between bg-white border">
      <div><h3 class="text-lg text-blue-500 font-semibold">Test Post</h3></div>
      <div>
        <span
          class="text-xs p-1 bg-yellow-400 text-yellow-800 leading-none rounded-lg"
          >Draft</span
        >
      </div>
      <div>
        <button
          class="py-1 px-3 text-red-500 text-sm mr-2 hover:bg-gray-100 rounded-md"
        >
          Delete
        </button>
        <button
          class="py-1 px-3 text-gray-700 text-sm hover:bg-gray-100 rounded-md"
        >
          Edit
        </button>
      </div>
    </li>
  </ul>
</template>
