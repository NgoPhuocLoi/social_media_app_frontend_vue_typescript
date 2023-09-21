import { createRouter, createWebHistory } from "vue-router";
import {
  HomeView,
  PostView,
  CreatePostView,
  AuthView,
  NotFoundView,
  ProfileView,
} from "../views";

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
    {
      path: "/:username",
      name: "profile",
      component: ProfileView,
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundView },
  ],
});

export default router;
