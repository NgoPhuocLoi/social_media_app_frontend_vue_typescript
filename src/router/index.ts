import { createRouter, createWebHistory } from "vue-router";
import {
  HomeView,
  PostView,
  CreatePostView,
  AuthView,
  NotFoundView,
  ProfileView,
} from "../views";

import store, { useUserStore } from "../stores";
import { UserService } from "@/services";

const userStore = useUserStore(store);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      redirect: "/auth/login",
      children: [
        {
          path: ":action",
          component: AuthView,
          name: "auth",
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

router.beforeEach(async (to, from) => {
  if (to.name === "auth") {
    return localStorage["accesstoken"] ? "/" : true;
  }
  try {
    const res = await UserService.getCurrentUser();
    const { user } = res.data.metadata;
    userStore.setUser(user);

    if (!user) return "/auth/login";
  } catch (error) {
    console.log(error);
    return "/auth/login";
  }
});

export default router;
