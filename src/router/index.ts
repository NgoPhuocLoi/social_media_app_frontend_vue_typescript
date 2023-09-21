import { createRouter, createWebHistory } from "vue-router";
import { HomeView, PostView, CreatePostView, AuthView } from "../views";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      name: "auth",
      redirect: "/auth/login",
      children: [
        {
          path: ":action",
          component: AuthView,
        },
      ],
    },

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
