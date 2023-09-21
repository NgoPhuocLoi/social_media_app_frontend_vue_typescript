<script setup lang="ts"></script>

<template>
  <form class="w-full">
    <div class="flex flex-col mb-3">
      <label>Name <span class="text-red-500">*</span></label>
      <input
        type="text"
        class="px-2 py-[6.5px] w-full rounded-md mt-2 border-2 border-gray-300 outline-1"
      />
    </div>

    <div class="flex flex-col mb-3">
      <label>Username <span class="text-red-500">*</span></label>
      <input
        type="text"
        class="px-2 py-[6.5px] w-full rounded-md mt-2 border-2 border-gray-300 outline-1"
      />
    </div>

    <div class="flex flex-col mb-3">
      <label>Email <span class="text-red-500">*</span></label>
      <input
        type="email"
        class="px-2 py-[6.5px] w-full rounded-md mt-2 border-2 border-gray-300 outline-1"
      />
    </div>

    <div class="flex flex-col mb-3">
      <label>Password <span class="text-red-500">*</span></label>
      <input
        type="password"
        class="px-2 py-[6.5px] w-full rounded-md mt-2 border-2 border-gray-300 outline-1"
      />
    </div>

    <div class="flex flex-col mb-3">
      <label>Confirm password <span class="text-red-500">*</span></label>
      <input
        type="password"
        class="px-2 py-[6.5px] w-full rounded-md mt-2 border-2 border-gray-300 outline-1"
      />
    </div>

    <button class="py-3 px-5 bg-blue-500 text-white rounded-lg w-full mt-8">
      Sign up
    </button>

    <div class="w-full h-[2px] bg-gray-200 my-6"></div>

    <p class="text-center">
      Already has an account?
      <RouterLink class="text-blue-600" to="/auth/login">Login now</RouterLink>
    </p>
  </form>
</template>
