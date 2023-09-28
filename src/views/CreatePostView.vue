<script setup lang="ts">
import { ref } from "vue";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { useRoute } from "vue-router";
import Modal from "@/components/Modal.vue";
import { PostService } from "@/services";

const route = useRoute();

const modalOpen = ref(false);

if (route.params.id) {
  console.log("Edit");
}

const title = ref("");
const data = ref("");

let timer: number;

const handleInputTitle = async (e: Event) => {
  title.value = (e.target as HTMLDivElement).innerText;
};

const handlePublic = async () => {
  console.log(title.value);
  console.log(data.value);
};

const handleSaveDraft = async () => {
  try {
    const res = await PostService.createNewPost({
      title: title.value,
      content: data.value,
    });

    console.log(res.data.metadata.post);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <DefaultLayout :has-search-bar="false">
    <div class="flex justify-between">
      <div
        v-once
        data-ph="New Post title here.."
        contenteditable="true"
        @input="handleInputTitle"
        class="font-semibold text-gray-600 text-xl w-full mb-4 p-2 min-h-[30px] rounded-md outline-gray-100 leading-0 bg-white flex-1 break-words mr-4"
      >
        {{ title }}
      </div>
      <div class="flex gap-2 flex-shrink-0">
        <button
          class="px-4 py-2 text-white bg-blue-500 rounded-lg h-fit"
          @click="handlePublic"
        >
          Publish
        </button>
        <button
          class="px-4 py-2 text-white bg-blue-500 rounded-lg h-fit"
          @click="handleSaveDraft"
        >
          Save Draft
        </button>
      </div>
    </div>
    <MdEditor
      v-model="data"
      placeholder="Your post content here..."
      language="en-US"
    />
  </DefaultLayout>

  <Modal variant="info" v-model:open="modalOpen">
    <p>
      You've made changes to your post. Do you want to navigate to leave this
      page?
    </p>

    <div class="pt-4">
      <button
        class="px-4 py-2 text-white mr-2 rounded-md hover:opacity-90 bg-red-500"
      >
        Yes, leave this page
      </button>
      <button
        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:opacity-90"
      >
        No, keep editing
      </button>
    </div>
  </Modal>
</template>

<style>
[contenteditable="true"]:empty:not(:focus):before {
  content: attr(data-ph);
  color: #808080;
}
</style>
