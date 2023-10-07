<script setup lang="ts">
import { onMounted, ref } from "vue";
import { MdEditor, type ExposeParam } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { routerKey, useRoute, useRouter } from "vue-router";
import Modal from "@/components/Modal.vue";
import { PostService, UploadService } from "@/services";
import type { Post } from "@/interfaces/model";

const route = useRoute();
const router = useRouter();

const modalOpen = ref(false);

if (route.params.id) {
  console.log("Edit");
}

const title = ref("");
const data = ref("");
const titleRef = ref<HTMLDivElement>();
const editorRef = ref<ExposeParam>();
const post = ref<Post>();

onMounted(async () => {
  if (route.name === "editPost") {
    try {
      const res = await PostService.getPostById(route.params.id as string);
      post.value = res.data.metadata.post;
      titleRef.value!.innerText = post.value!.title;
      title.value = post.value!.title;
      data.value = post.value!.content;
    } catch (error) {
      console.log(error);
      router.push("/notfound");
    }
  }
});

const handleInputTitle = async (e: Event) => {
  title.value = (e.target as HTMLDivElement).innerText.trim();
};

const handlePublic = async () => {
  try {
    let res;
    let postId: string;
    if (route.name === "editPost") {
      postId = route.params.id as string;
    } else {
      const r = await PostService.createNewPost({
        title: title.value,
        content: data.value,
      });
      postId = r.data.metadata.post._id;
    }

    res = await PostService.publishPost(postId, {
      title: title.value,
      content: data.value,
    });

    router.push(`/post/${res.data.metadata.post._id}`);
  } catch (error) {
    console.log(error);
    router.push("/notfound");
  }
};

const handleUnpublished = async () => {
  try {
    await PostService.unpublishPost(post.value!._id);
    router.push(`/post/${post.value!._id}`);
  } catch (error) {
    console.log(error);
  }
};

const handleSaveDraft = async () => {
  try {
    let res;
    if (route.name === "editPost") {
      res = await PostService.updatePostById(route.params.id as string, {
        title: title.value,
        content: data.value,
      });
    } else {
      res = await PostService.createNewPost({
        title: title.value,
        content: data.value,
      });
    }

    router.push(`/post/${res.data.metadata.post._id}?review=true`);
  } catch (error) {
    console.log(error);
  }
};

const handleUpdateImage = async (a: any) => {
  const form = new FormData();
  form.append("image", a[0]);
  try {
    let res;
    editorRef.value?.insert((selectedText) => {
      /**
       * @return targetValue    Content to be inserted
       * @return select         Automatically select content
       * @return deviationStart Start position of the selected content
       * @return deviationEnd   End position of the selected content
       */
      return {
        targetValue: `Uploading...`,
        select: true,
        deviationStart: 0,
        deviationEnd: 0,
      };
    });
    let postId: string;
    if (route.name === "editPost") {
      postId = route.params.id as string;
    } else {
      const r = await PostService.createNewPost({
        title: title.value,
        content: data.value,
      });
      postId = r.data.metadata.post._id;
    }
    res = await UploadService.uploadImageInPost(postId, form);
    editorRef.value?.insert(() => {
      /**
       * @return targetValue    Content to be inserted
       * @return select         Automatically select content
       * @return deviationStart Start position of the selected content
       * @return deviationEnd   End position of the selected content
       */
      return {
        targetValue: `![Image description](${res!.data.metadata.link})`,
        select: false,
        deviationStart: 0,
        deviationEnd: 0,
      };
    });
    // console.log(res?.data);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <DefaultLayout :has-search-bar="false">
    <div class="flex justify-between">
      <div
        ref="titleRef"
        v-once
        data-ph="New Post title here.."
        contenteditable="true"
        @input="handleInputTitle"
        class="font-semibold text-gray-600 text-xl w-full mb-4 p-2 min-h-[30px] rounded-md outline-gray-100 leading-0 bg-white flex-1 break-words mr-4"
      >
        {{ title }}
      </div>

      <div v-if="!post?.isPublished" class="flex gap-2 flex-shrink-0">
        <button
          class="px-4 py-2 text-white bg-blue-500 rounded-lg h-fit"
          @click="handlePublic"
        >
          Publish
        </button>
        <button
          class="px-4 py-2 text-white bg-blue-500 rounded-lg h-fit disabled:opacity-60"
          :disabled="!title"
          @click="handleSaveDraft"
        >
          Save Draft
        </button>
      </div>

      <div v-else class="flex gap-2 flex-shrink-0">
        <button
          class="px-4 py-2 text-white bg-blue-500 rounded-lg h-fit"
          @click="handleSaveDraft"
        >
          Saves
        </button>
        <button
          class="px-4 py-2 text-white bg-red-500 rounded-lg h-fit disabled:opacity-60"
          @click="handleUnpublished"
        >
          Unpublished
        </button>
      </div>
    </div>
    <MdEditor
      v-model="data"
      placeholder="Your post content here..."
      language="en-US"
      @upload-img="handleUpdateImage"
      ref="editorRef"
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
