import { createRouter, createWebHistory } from "vue-router";
import { HomeView, PostView, CreatePostView } from "../views";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/new",
      name: "createPost",
      component: CreatePostView,
    },
    {
      path: "/post/:id",
      name: "post",
      component: PostView,
    },
  ],
});

export default router;
