<script setup lang="ts">
import Avatar from "@/components/Avatar.vue";
</script>

<template>
  <header class="h-[56px] shadow-md fixed top-0 left-0 right-0 bg-white">
    <div class="px-4 flex justify-between items-center h-full">
      <div class="flex h-full py-2 items-center">
        <a href="#" class="block w-[50px] h-[40px]">
          <img
            class="w-full"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="Logo"
          />
        </a>

        <div class="mx-4 w-[420px] relative">
          <input
            class="h-full w-[420px] px-2 py-[6.5px] rounded-md border-2 border-gray-400"
            type="text"
            placeholder="Search.."
          />
          <button class="absolute right-0 px-2 h-full">
            <ion-icon
              name="search-outline"
              class="text-[24px] mt-[4px]"
            ></ion-icon>
          </button>
        </div>
      </div>

      <div class="flex items-center">
        <div
          class="border px-[14px] py-[6px] mr-2 rounded-md border-blue-500 text-[16px] text-blue-500"
        >
          Create Post
        </div>
        <div class="m-[4px] p-2">
          <ion-icon
            name="notifications-outline"
            class="text-[24px] mt-[4px]"
          ></ion-icon>
        </div>

        <Avatar
          class="p-1"
          url="https://res.cloudinary.com/practicaldev/image/fetch/s--FYCEQ8su--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/849300/27f29501-1aad-41a0-b64e-f38bf422526c.jpeg"
        />
      </div>
    </div>
  </header>
</template>
