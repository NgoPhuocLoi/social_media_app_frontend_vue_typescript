<script setup lang="ts">
import hljs from "highlight.js";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import { computed, ref } from "vue";

interface PostContentProps {
  text: string;
}

const props = withDefaults(defineProps<PostContentProps>(), {
  text: "",
});

const output = computed(() => marked.parse(props.text));

const marked = new Marked(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  })
);
</script>

<template>
  <div class="prose prose-xl prose-p:text-black" v-html="output"></div>
</template>

<style>
.hljs {
  background: none;
  padding: 0;
}

pre code.hljs {
  padding: 0;
}
</style>
