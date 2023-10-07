<script setup lang="ts">
import { onMounted, ref } from "vue";
import { PostService } from "@/services";
import type { Post } from "@/interfaces/model";
import { useUserStore } from "@/stores";
import Modal from "../Modal.vue";

const posts = ref<Post[]>([]);
const openConfimModal = ref(false);
const chosenPostId = ref<string>();

const userStore = useUserStore();

onMounted(async () => {
  try {
    const res = await PostService.getAllPostsOfUser(userStore.user!._id);
    posts.value = res.data.metadata.posts;
  } catch (error) {
    console.log(error);
  }
});

const handleDeletePost = async () => {
  try {
    await PostService.deletePostById(chosenPostId.value!);
    const res = await PostService.getAllPostsOfUser(userStore.user!._id);
    posts.value = res.data.metadata.posts;
  } catch (error) {
    console.log(error);
  } finally {
    openConfimModal.value = false;
  }
};
</script>

<template>
  <ul>
    <li
      v-for="post in posts"
      :key="post._id"
      class="p-4 flex justify-between bg-white border"
    >
      <div class="w-[50%]">
        <RouterLink
          :to="`/post/${post._id}${post.isPublished ? '' : '?review=true'}`"
          class="text-lg text-blue-500 font-semibold hover:underline"
          >{{ post.title }}</RouterLink
        >
      </div>
      <div class="flex-1 flex justify-between items-center">
        <div class="">
          <span
            v-if="!post.isPublished"
            class="text-xs p-1 bg-yellow-400 text-yellow-800 leading-none rounded-lg"
            >Draft</span
          >
          <div v-else>
            <div class="flex text-sm text-gray-600 ml-[-8px]">
              <div
                class="py-1 pl-2 pr-3 flex rounded-md hover:bg-gray-100 items-center duration-100 cursor-pointer"
              >
                <ion-icon name="heart-outline" class="text-[24px]"></ion-icon>
                <span class="ml-1">{{ post.likeNum }}</span>
              </div>

              <div
                class="py-1 pl-2 pr-3 flex rounded-md hover:bg-gray-100 items-center duration-100 cursor-pointer"
              >
                <ion-icon
                  name="chatbubble-outline"
                  class="text-[20px]"
                ></ion-icon>
                <span class="ml-1">{{ post.commentNum }}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            @click="
              openConfimModal = true;
              chosenPostId = post._id;
            "
            class="py-1 px-3 text-red-500 text-sm mr-2 hover:bg-gray-100 rounded-md"
          >
            Delete
          </button>
          <button
            class="py-1 px-3 text-gray-700 text-sm hover:bg-gray-100 rounded-md"
            @click="$router.push(`post/${post._id}/edit`)"
          >
            Edit
          </button>
        </div>
      </div>
    </li>
  </ul>

  <Modal
    v-model:open="openConfimModal"
    variant="warning"
    title="Are you sure you want to delete this post"
  >
    <div>
      <p class="mb-4">You cannot undo this action!!</p>
      <div>
        <button
          class="px-4 py-2 rounded-md bg-red-500 text-white hover:opacity-90"
          @click="handleDeletePost"
        >
          Delete
        </button>

        <button
          @click="openConfimModal = false"
          class="px-4 py-2 rounded-md bg-gray-200 ml-2 hover:opacity-90"
        >
          Cancel
        </button>
      </div>
    </div></Modal
  >
</template>
