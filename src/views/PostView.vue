<script setup lang="ts">
import Avatar from "@/components/Avatar.vue";
import FollowSidebar from "@/components/FollowSidebar.vue";
import PostContent from "@/components/PostContent.vue";
import type { Post } from "@/interfaces/model";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { PostService } from "@/services";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import dateFormat from "dateformat";
import { useUserStore } from "@/stores";

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const post = ref<Post>();

onMounted(async () => {
  try {
    const res = await PostService.getPostById(route.params.id as string);
    post.value = res.data.metadata.post;

    if (
      !post.value?.isPublished &&
      post.value!.userId._id !== userStore.user!._id
    ) {
      router.push("/notfound");
    }
  } catch (error) {
    console.log(error);
    router.push("/notfound");
  }
});
</script>

<template>
  <DefaultLayout>
    <div class="flex justify-between">
      <aside class="w-16 mr-4">
        <div class="h-[64px] flex flex-col items-center">
          <ion-icon name="heart-outline" class="text-[28px]"></ion-icon>
          <span class="text-sm text-gray-600">{{ post?.likeNum }}</span>
        </div>

        <div class="h-[64px] flex flex-col items-center">
          <ion-icon name="chatbubble-outline" class="text-[24px]"></ion-icon>
          <span class="text-sm text-gray-600">{{ post?.commentNum }}</span>
        </div>
      </aside>

      <div class="flex-1 mr-4">
        <div
          v-if="!post?.isPublished"
          class="p-4 bg-red-100 mb-4 rounded-md border"
        >
          <span class="font-bold">Unpublished Post</span>
          <span>
            This URL is public but secret, so share at your own discretion.
          </span>
        </div>

        <div class="bg-white rounded-md border">
          <div class="px-16 pt-8">
            <div class="mb-[20px] flex">
              <Avatar size="40px" :url="post?.userId.avatarUrl" />

              <div class="pl-3">
                <p class="font-bold text-gray-700">{{ post?.userId.name }}</p>
                <p class="text-xs text-gray-500">
                  Posted on {{ dateFormat(post?.createdAt, "mmm d") }}
                </p>
              </div>
            </div>

            <h1 class="text-5xl font-bold">{{ post?.title }}</h1>
          </div>

          <section class="px-16 py-8">
            <PostContent :text="post?.content" />
          </section>

          <section class="px-16 py-8 border border-b-0 border-l-0 border-r-0">
            <h2 class="mb-6 font-bold text-2xl">Top comments</h2>
          </section>
        </div>
      </div>

      <FollowSidebar />
    </div>
  </DefaultLayout>
</template>
