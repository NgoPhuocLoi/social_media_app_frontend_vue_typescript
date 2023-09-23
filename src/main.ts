import "./assets/base.css";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { createApp } from "vue";
import store from "./stores";
import Popper from "vue3-popper";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.component("QuillEditor", QuillEditor);
app.component("Popper", Popper);
app.use(store);

app.mount("#app");
