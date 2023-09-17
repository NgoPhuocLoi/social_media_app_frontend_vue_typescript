<template>
  <div id="app">
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
  </div>
</template>

<script lang="ts">
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { CodeBlock } from "@ckeditor/ckeditor5-code-block";
export default {
  name: "app",
  data() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        plugins: [CodeBlock],
        toolbar: {
          items: ["codeBlock"],
        },
        // The configuration of the editor.
      },
    };
  },
};
</script>
