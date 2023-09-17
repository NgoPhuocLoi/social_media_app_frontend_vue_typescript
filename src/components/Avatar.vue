<script setup lang="ts">
interface AvatarProps {
  url: string;
  size?: string;
}

const props = withDefaults(defineProps<AvatarProps>(), {
  size: "40px",
});
</script>

<template>
  <div
    class="rounded-full overflow-hidden flex items-center justify-center"
    :style="`width: ${size};height: ${size}`"
  >
    <img
      class="w-full rounded-full border border-gray-500 object-center"
      :src="url"
      alt="Avatar"
    />
  </div>
</template>
