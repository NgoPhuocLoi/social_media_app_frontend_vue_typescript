<script setup lang="ts">
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import FollowSidebar from "@/components/FollowSidebar.vue";
import PostReview from "@/components/posts/PostReview.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <!-- <h1>Hello</h1> -->
    <div class="flex justify-between">
      <Sidebar />

      <div class="flex-1 mr-4">
        <!-- <PostReview v-for="i in 10"/> -->
      </div>
      <FollowSidebar />
    </div>
  </DefaultLayout>
</template>
