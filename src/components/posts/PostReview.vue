<script setup lang="ts">
import type { Post } from "@/interfaces/model";
import Avatar from "../Avatar.vue";
import dateformat from "dateformat";

interface PostreviewProps {
  post: Post;
}

defineProps<PostreviewProps>();
</script>
<template>
  <div class="p-[20px] bg-white rounded-md mb-2 border cursor-pointer">
    <div class="flex items-center mb-2">
      <Avatar size="32px" class="mr-2" :url="post.userId.avatarUrl" />

      <div>
        <p class="text-gray-700 text-sm">{{ post.userId.name }}</p>
        <p class="text-gray-600 text-xs">
          {{ dateformat(post.createdAt, "mmm d") }}
        </p>
      </div>
    </div>

    <div class="pl-[40px]">
      <h2 class="text-2xl font-bold mb-3 hover:text-blue-500">
        {{ post.title }}
      </h2>

      <div class="flex text-sm text-gray-600 ml-[-8px]">
        <div
          class="py-1 pl-2 pr-3 flex rounded-md hover:bg-gray-100 items-center duration-100 cursor-pointer"
        >
          <ion-icon name="heart-outline" class="text-[24px]"></ion-icon>
          <span class="ml-1">{{ post.likeNum }} likes</span>
        </div>

        <div
          class="py-1 pl-2 pr-3 flex rounded-md hover:bg-gray-100 items-center duration-100 cursor-pointer"
        >
          <ion-icon name="chatbubble-outline" class="text-[20px]"></ion-icon>
          <span class="ml-1">{{ post.commentNum }} comments</span>
        </div>
      </div>
    </div>
  </div>
</template>
