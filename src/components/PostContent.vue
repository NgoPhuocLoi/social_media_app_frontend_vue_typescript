<script setup lang="ts">
import hljs from "highlight.js";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import { computed, ref } from "vue";

const text =
  '## Hello\nThis is my first post\n![](https://images.viblo.asia/f5b296ee-8338-4f24-831a-8f9ebee583a9.jpeg)\n## Sample of C++ program\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main(){\n cout << "Hello World";\n}\n```\n\nThat\'s all';

const output = computed(() => marked.parse(text));

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
