<script setup lang="ts">
import Header from "@/components/Header.vue";
import PostReview from "@/components/posts/PostReview.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { useUserStore } from "@/stores";
import { onMounted, ref } from "vue";
import { PostService } from "../services";
import type { Post } from "@/interfaces/model";
import { useRoute } from "vue-router";

const posts = ref<Post[]>([]);
const loading = ref(false);
const route = useRoute();
const userStore = useUserStore();

onMounted(async () => {
  loading.value = true;
  try {
    const res = await PostService.getPublishedPostsOfUser(
      (route.params.userId as string) || ""
    );
    posts.value = res.data.metadata.posts;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <Header />

  <div class="mt-[56px] relative bg-gray-100 z-[-200] h-full">
    <div class="w-full h-[128px] bg-black absolute z-[-100]"></div>
    <div class="px-4 pb-4 pt-16 max-w-[1024px] mx-auto">
      <header class="bg-white relative pt-2 rounded-md shadow">
        <div class="h-[128px] px-6 mb-3 pt-4 absolute top-[-50%] z-0 w-full">
          <div
            class="relative w-[128px] h-[128px] p-2 rounded-full overflow-hidden bg-black mx-auto"
          >
            <img
              v-if="userStore.user!.avatarUrl"
              class="w-full rounded-full"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--CtvnnoHI--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/849300/27f29501-1aad-41a0-b64e-f38bf422526c.jpeg"
              alt=""
            />

            <div
              v-else
              class="rounded-full border border-gray-500 w-full bg-white h-full flex items-center justify-center text-4xl"
            >
              {{
                userStore
                  .user!.name.split(" ")
                  [userStore.user!.name.split(" ").length - 1][0].toUpperCase()
              }}
            </div>
          </div>

          <div class="pt-6 pr-6 mt-[-64px] w-full bg-transparent flex">
            <button class="px-4 py-2 text-white bg-blue-500 rounded-md ml-auto">
              Edit profile
            </button>
          </div>
        </div>

        <div class="p-6 w-full bg-white text-center mt-14">
          <h3 class="mb-2 text-3xl font-semibold">
            {{ userStore.user?.name }}
          </h3>
        </div>
      </header>

      <div class="flex w-full gap-4 h-[300px] mt-4">
        <div
          class="w-[33%] bg-white rounded-md shadow border p-4 text-gray-600 h-fit"
        >
          <div class="flex items-center mb-4">
            <ion-icon name="newspaper-outline" class="text-2xl"></ion-icon>
            <span class="ml-3"
              >{{ userStore.user?.postNum }} post<span
                v-if="parseInt(userStore.user!.postNum as unknown as string) > 1"
                >s</span
              >
              published</span
            >
          </div>
          <div class="flex items-center mb-4">
            <ion-icon name="chatbubble-outline" class="text-2xl"></ion-icon>
            <span class="ml-3"
              >{{ userStore.user?.followingNum }} following<span
                v-if="parseInt(userStore.user!.followingNum as unknown as string) > 1"
                >s</span
              >
            </span>
          </div>
          <div class="flex items-center">
            <ion-icon name="person-outline" class="text-2xl"></ion-icon>
            <span class="ml-3"
              >{{ userStore.user?.followerNum }} follower<span
                v-if="parseInt(userStore.user!.followerNum as unknown as string) > 1"
                >s</span
              ></span
            >
          </div>
        </div>

        <div class="w-[67%]">
          <PostReview v-for="post in posts" :key="post._id" :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>
