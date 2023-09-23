import type { User } from "@/interfaces/model";
import { defineStore } from "pinia";
import { ref } from "vue";

const useUserStore = defineStore("user", () => {
  const user = ref<User | null>(null);

  const setUser = (payload: any) => {
    user.value = payload;
  };

  return { user, setUser };
});

export default useUserStore;
