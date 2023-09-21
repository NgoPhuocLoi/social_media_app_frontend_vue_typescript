<script setup lang="ts"></script>

<template>
  <form class="w-full">
    <div class="flex flex-col mb-3">
      <label>Email</label>
      <input
        type="email"
        class="px-2 py-[6.5px] w-full rounded-md mt-2 border-2 border-gray-300 outline-1"
      />
    </div>

    <div class="flex flex-col">
      <label>Password</label>
      <input
        type="password"
        class="px-2 py-[6.5px] w-full rounded-md mt-2 border-2 border-gray-300 outline-1"
      />
    </div>

    <button class="py-3 px-5 bg-blue-500 text-white rounded-lg w-full mt-8">
      Log in
    </button>

    <div class="w-full h-[2px] bg-gray-200 my-6"></div>

    <p class="text-center">
      New to Community?
      <RouterLink class="text-blue-600" to="/auth/register"
        >Create account</RouterLink
      >
    </p>
  </form>
</template>
