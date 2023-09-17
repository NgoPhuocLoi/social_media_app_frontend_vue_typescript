<script setup lang="ts">
import Avatar from "@/components/Avatar.vue";
import FollowSidebar from "@/components/FollowSidebar.vue";
import PostContent from "@/components/PostContent.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <div class="flex justify-between">
      <aside class="w-16 mr-4">
        <div class="h-[64px] flex flex-col items-center">
          <ion-icon name="heart-outline" class="text-[28px]"></ion-icon>
          <span class="text-sm text-gray-600">3</span>
        </div>

        <div class="h-[64px] flex flex-col items-center">
          <ion-icon name="chatbubble-outline" class="text-[24px]"></ion-icon>
          <span class="text-sm text-gray-600">3</span>
        </div>
      </aside>

      <div class="bg-white flex-1 mr-4 rounded-md border">
        <div class="px-16 pt-8">
          <div class="mb-[20px] flex">
            <Avatar
              size="40px"
              url="https://res.cloudinary.com/practicaldev/image/fetch/s--SS1YjPIo--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/127429/370e6334-33ec-4c82-8937-f1a7116ddd89.jpg"
            />

            <div class="pl-3">
              <p class="font-bold text-gray-700">Taylor Hunt</p>
              <p class="text-xs text-gray-500">Posted on Sep 17</p>
            </div>
          </div>

          <h1 class="text-5xl font-bold">Why not React?</h1>
        </div>

        <section class="px-16 py-8">
          <PostContent />
        </section>

        <section class="px-16 py-8 border border-b-0 border-l-0 border-r-0">
          <h2 class="mb-6 font-bold text-2xl">Top comments</h2>
        </section>
      </div>

      <FollowSidebar />
    </div>
  </DefaultLayout>
</template>
