<script setup lang="ts">
import { useRoute } from "vue-router";
import { LoginForm, RegisterForm } from "@/components/auth/index.ts";
import { computed } from "vue";

const route = useRoute();
const text = computed(() =>
  route.params.action === "login"
    ? "Welcome back to DEV Community"
    : "Create your account"
);

const formComponent = computed(() =>
  route.params.action === "login" ? LoginForm : RegisterForm
);
</script>

<template>
  <div class="p-4 w-full h-full flex items-center justify-center">
    <div class="w-[640px] py-6 px-12 flex flex-col items-center">
      <div class="w-[48px] h-[48px]">
        <img
          class="w-full"
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
          alt=""
        />
      </div>

      <h1 class="mt-4 text-3xl font-bold">{{ text }}</h1>

      <component :is="formComponent" class="mt-8" />
    </div>
  </div>
</template>
