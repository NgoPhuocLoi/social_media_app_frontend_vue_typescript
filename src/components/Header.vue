<script setup lang="ts">
import Avatar from "@/components/Avatar.vue";
import { useUserStore } from "@/stores";
import { useRouter } from "vue-router";
interface HeaderProps {
  hasSearchBar: boolean;
}

const props = withDefaults(defineProps<HeaderProps>(), {
  hasSearchBar: true,
});

const userStore = useUserStore();
const router = useRouter();

const handleLogout = () => {
  userStore.setUser(null);
  localStorage.removeItem("accesstoken");
  router.push("/auth/login");
};
</script>

<template>
  <header class="h-[56px] shadow-md fixed top-0 left-0 right-0 bg-white z-20">
    <div class="px-4 flex justify-between items-center h-full">
      <div class="flex h-full py-2 items-center">
        <a href="#" class="block w-[50px] h-[40px]">
          <img
            class="w-full"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="Logo"
          />
        </a>

        <div v-if="hasSearchBar" class="mx-4 w-[420px] relative">
          <input
            class="h-full w-[420px] px-2 py-[6.5px] rounded-md border-2 border-gray-400"
            type="text"
            placeholder="Search.."
          />
          <button class="absolute right-0 px-2 h-full">
            <ion-icon
              name="search-outline"
              class="text-[24px] mt-[4px]"
            ></ion-icon>
          </button>
        </div>
      </div>

      <div class="flex items-center">
        <RouterLink
          to="/new"
          class="border px-[14px] py-[6px] mr-2 rounded-md border-blue-500 text-[16px] text-blue-500"
        >
          Create Post
        </RouterLink>
        <div class="m-[4px] p-2">
          <ion-icon
            name="notifications-outline"
            class="text-[24px] mt-[4px]"
          ></ion-icon>
        </div>

        <Popper>
          <Avatar
            class="p-1"
            url="https://res.cloudinary.com/practicaldev/image/fetch/s--FYCEQ8su--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/849300/27f29501-1aad-41a0-b64e-f38bf422526c.jpeg"
          />
          <template #content>
            <div
              class="p-2 bg-white mr-4 mt-[-12px] shadow border border-gray-300 bor rounded-md w-[250px]"
            >
              <ul class="text-gray-600">
                <li class="h-fit cursor-pointer rounded-md overflow-hidden">
                  <RouterLink
                    to="/profile"
                    class="py-2 px-4 block hover:bg-blue-100 duration-100 rounded-md"
                  >
                    <div>
                      <p>Ngo Phuoc Loi</p>
                      <p class="text-sm">@ngophuocloi</p>
                    </div>
                  </RouterLink>
                </li>
                <div class="w-full h-[1px] bg-gray-200 my-2"></div>
                <li>
                  <RouterLink
                    to="#"
                    class="block py-2 px-4 hover:bg-blue-100 duration-100 rounded-md"
                    >Dashboard</RouterLink
                  >
                </li>
                <div class="w-full h-[1px] bg-gray-200 my-2"></div>
                <li>
                  <button
                    @click="handleLogout"
                    class="block w-full text-left py-2 px-4 hover:bg-blue-100 duration-100 rounded-md"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </template>
        </Popper>
      </div>
    </div>
  </header>
</template>
