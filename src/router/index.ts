import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized,
} from "vue-router";
import {
  HomeView,
  PostView,
  CreatePostView,
  AuthView,
  NotFoundView,
  ProfileView,
  DashboardView,
} from "../views";

import PostList from "@/components/dashbboard/PostList.vue";
import UserList from "@/components/dashbboard/UserList.vue";

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
      beforeEnter: async (to, from) => {
        if (!localStorage["accesstoken"]) return;
        try {
          const res = await UserService.getCurrentUser();
          if (res.data?.metadata?.user) return "/";
        } catch (error) {
          console.log(error);
        }
      },
    },

    {
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter: checkLogedInUser,
    },
    {
      path: "/new",
      name: "createPost",
      component: CreatePostView,
      beforeEnter: checkLogedInUser,
    },
    {
      path: "/post/:id",
      name: "post",
      component: PostView,
      beforeEnter: checkLogedInUser,
    },
    {
      path: "/post/:id/edit",
      name: "editPost",
      component: CreatePostView,
      beforeEnter: checkLogedInUser,
    },
    {
      path: "/profile/:userId",
      name: "profile",
      component: ProfileView,
      beforeEnter: checkLogedInUser,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
      beforeEnter: checkLogedInUser,
      children: [
        {
          path: "",
          name: "posts",
          component: PostList,
        },
        {
          path: "followers",
          name: "followers",
          component: UserList,
        },
        {
          path: "followings",
          name: "followings",
          component: UserList,
        },
      ],
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundView },
  ],
});

async function checkLogedInUser(
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized
) {
  try {
    const res = await UserService.getCurrentUser();

    const user = res.data?.metadata?.user;

    userStore.setUser(user);
    return;
  } catch (error) {
    console.log(error);
    return "/auth/login";
  }
}

export default router;
