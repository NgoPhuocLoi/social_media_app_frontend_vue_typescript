<script setup lang="ts">
import Header from "@/components/Header.vue";
interface DefaultLayoutProps {
  hasSearchBar: boolean;
}

const props = withDefaults(defineProps<DefaultLayoutProps>(), {
  hasSearchBar: true,
});
</script>

<template>
  <Header :has-search-bar="hasSearchBar" />
  <main class="pt-[56px]">
    <div class="p-4 bg-gray-100">
      <slot></slot>
    </div>
  </main>
</template>
