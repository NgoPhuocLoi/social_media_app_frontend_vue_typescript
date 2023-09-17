<script setup lang="ts">
import Avatar from "./Avatar.vue";
</script>

<template>
  <div class="w-[350px] bg-white rounded-md h-fit">
    <h2 class="px-4 py-3 text-lg font-semibold">Who to follow</h2>

    <ul>
      <li class="px-4 py-3 flex items-center">
        <Avatar
          size="32px"
          class="mr-3"
          url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
        />

        <div class="max-w-[60%]">
          <h4 class="truncate over text-[15px]">
            Python Software Python Software Python Software
          </h4>
          <p class="text-sm text-gray-500">100 posts</p>
        </div>

        <button
          class="px-4 py-1 ml-2 rounded-md bg-blue-500 text-white min-w-[80px]"
        >
          Follow
        </button>
      </li>

      <li class="px-4 py-3 flex items-center">
        <Avatar
          size="32px"
          class="mr-3"
          url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
        />

        <div class="max-w-[60%]">
          <h4 class="truncate over text-[15px]">
            Python Software Python Software Python Software
          </h4>
          <p class="text-sm text-gray-500">100 posts</p>
        </div>

        <button
          class="px-4 py-1 ml-2 rounded-md bg-blue-500 text-white min-w-[80px]"
        >
          Follow
        </button>
      </li>

      <li class="px-4 py-3 flex items-center">
        <Avatar
          size="32px"
          class="mr-3"
          url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
        />

        <div class="max-w-[60%]">
          <h4 class="truncate over text-[15px]">
            Python Software Python Software Python Software
          </h4>
          <p class="text-sm text-gray-500">100 posts</p>
        </div>

        <button
          class="px-4 py-1 ml-2 rounded-md bg-blue-500 text-white min-w-[80px]"
        >
          Follow
        </button>
      </li>
    </ul>
  </div>
</template>
