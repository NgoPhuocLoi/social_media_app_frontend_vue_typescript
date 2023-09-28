<script setup lang="ts">
import { useUserStore } from "@/stores";

interface AvatarProps {
  url: string | undefined;
  size?: string;
}

const props = withDefaults(defineProps<AvatarProps>(), {
  size: "40px",
});

const userStore = useUserStore();
</script>

<template>
  <div
    class="rounded-full overflow-hidden flex items-center justify-center"
    :style="`width: ${size};height: ${size}`"
  >
    <img
      v-if="url"
      class="w-full rounded-full border border-gray-500 object-center"
      :src="url"
      alt="Avatar"
    />

    <div
      v-else
      class="rounded-full border border-gray-500 w-full h-full flex items-center justify-center"
    >
      {{
        userStore
          .user!.name.split(" ")
          [userStore.user!.name.split(" ").length - 1][0].toUpperCase()
      }}
    </div>
  </div>
</template>
