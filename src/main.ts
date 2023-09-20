import "./assets/base.css";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("QuillEditor", QuillEditor);

app.mount("#app");
