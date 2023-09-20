<script setup lang="ts">
import { ref } from "vue";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
const data = ref("Hello");
</script>

<template>
  <DefaultLayout :has-search-bar="false">
    <div class="flex justify-between">
      <div
        data-ph="Helolo"
        contenteditable="true"
        class="font-semibold text-gray-600 text-xl w-full mb-4 p-2 min-h-[30px] rounded-md outline-none leading-0 bg-white max-w-[70%] break-words"
      ></div>
      <div class="flex gap-2 flex-shrink-0">
        <button class="px-4 py-2 text-white bg-blue-500 rounded-lg h-fit">
          Publish
        </button>
        <button class="px-4 py-2 text-white bg-blue-500 rounded-lg h-fit">
          Save Draft
        </button>
      </div>
    </div>
    <MdEditor v-model="data" :preview="false" language="en-US" />
  </DefaultLayout>
</template>

<style>
[contenteditable="true"]:empty:not(:focus):before {
  content: attr(data-ph);
  color: #808080;
}
</style>
