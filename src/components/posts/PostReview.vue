<script setup lang="ts">
import Avatar from "../Avatar.vue";
</script>
<template>
  <div class="p-[20px] bg-white rounded-md mb-2 border cursor-pointer">
    <div class="flex items-center mb-2">
      <Avatar
        size="32px"
        class="mr-2"
        url="https://res.cloudinary.com/practicaldev/image/fetch/s--YKJNWuhA--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1096626/93c589ef-99c5-4df8-96ba-ffca79f9e0f1.jpeg"
      />

      <div>
        <p class="text-gray-700 text-sm">Yeom suyun</p>
        <p class="text-gray-600 text-xs">Sep 16</p>
      </div>
    </div>

    <div class="pl-[40px]">
      <h2 class="text-2xl font-bold mb-3 hover:text-blue-500">
        Throw away the "Script" from "Type""Script".
      </h2>

      <div class="flex text-sm text-gray-600 ml-[-8px]">
        <div
          class="py-1 pl-2 pr-3 flex rounded-md hover:bg-gray-100 items-center duration-100 cursor-pointer"
        >
          <ion-icon name="heart-outline" class="text-[24px]"></ion-icon>
          <span class="ml-1">26 likes</span>
        </div>

        <div
          class="py-1 pl-2 pr-3 flex rounded-md hover:bg-gray-100 items-center duration-100 cursor-pointer"
        >
          <ion-icon name="chatbubble-outline" class="text-[20px]"></ion-icon>
          <span class="ml-1">12 comments</span>
        </div>
      </div>
    </div>
  </div>
</template>
