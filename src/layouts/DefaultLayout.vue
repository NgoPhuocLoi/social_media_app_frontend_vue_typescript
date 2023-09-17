<script setup lang="ts">
import Header from "@/components/Header.vue"
</script>

<template>
    <Header />
    <main class="pt-[56px]">
        <div class="p-4 bg-gray-100">
            <slot></slot>
        </div>
    </main>
    
</template>