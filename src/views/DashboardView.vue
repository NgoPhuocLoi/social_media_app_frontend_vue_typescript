<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <h1 class="text-3xl font-bold pb-2">Dashboard</h1>

    <div class="flex gap-4 mt-3">
      <div class="w-[240px]">
        <ul class="w-full">
          <li class="w-full rounded-sm cursor-pointer">
            <RouterLink
              to="/dashboard/"
              class="flex p-2 justif justify-between"
              exact-active-class="bg-white"
              ><span>Posts</span>
              <span class="p-1 bg-gray-200 text-xs rounded-lg"
                >4</span
              ></RouterLink
            >
          </li>

          <li class="w-full rounded-sm cursor-pointer">
            <RouterLink
              to="/dashboard/followers"
              class="flex p-2 justify-between"
              exact-active-class="bg-white "
              ><span>Followers</span>
              <span class="p-1 bg-gray-200 text-xs rounded-lg"
                >4</span
              ></RouterLink
            >
          </li>
          <li class="w-full rounded-sm cursor-pointer">
            <RouterLink
              to="/dashboard/followings"
              class="flex p-2 justify-between"
              exact-active-class="bg-white "
              ><span>Followings</span>
              <span class="p-1 bg-gray-200 text-xs rounded-lg"
                >4</span
              ></RouterLink
            >
          </li>
        </ul>
      </div>

      <div class="flex-1 rounded-md overflow-auto">
        <RouterView />
      </div>
    </div>
  </DefaultLayout>
</template>
