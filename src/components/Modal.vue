<script setup lang="ts">
interface ModalProps {
  title?: string;
  open: boolean;
}

const emit = defineEmits(["update:open"]);

withDefaults(defineProps<ModalProps>(), {
  title: "Modal title",
});
</script>

<template>
  <div
    v-if="open"
    class="fixed z-30 top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.5)] flex items-center justify-center"
  >
    <div class="bg-white max-w-[640px] rounded-lg">
      <div
        class="p-2 pl-4 border border-t-0 border-l-0 border-r-0 flex justify-between items-center"
      >
        <p class="text-xl font-semibold leading-none">{{ title }}</p>
        <div
          class="text-3xl p-2 ml-6 hover:bg-gray-100 w-[40px] h-[40px] rounded-md cursor-pointer flex items-center justify-center"
          @click="emit('update:open', false)"
        >
          &times;
        </div>
      </div>
      <div class="p-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
