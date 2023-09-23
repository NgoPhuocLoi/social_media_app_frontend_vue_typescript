<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";
import { useUserStore } from "@/stores";
import { useRouter } from "vue-router";
import { AuthService } from "@/services";
import { ref } from "vue";
import Loading from "../icons/Loading.vue";

const userStore = useUserStore();
const router = useRouter();

const schema = toTypedSchema(
  yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
    confirmPassword: yup
      .string()
      .test("confirmPassword", "Password not match", function (value) {
        return this.parent.password === value;
      }),
  })
);

const { defineInputBinds, handleSubmit, errors, setFieldError } = useForm({
  validationSchema: schema,
});

const email = defineInputBinds("email");
const name = defineInputBinds("name");
const confirmPassword = defineInputBinds("confirmPassword");
const password = defineInputBinds("password");

const loading = ref(false);

const handleSignup = handleSubmit(async (values) => {
  loading.value = true;
  try {
    const res = await AuthService.register(values);

    router.push("/auth/login?register=true");
  } catch (error: any) {
    if (error.response) setFieldError("email", error.response.data.message);
    console.log(error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <form class="w-full" @submit="handleSignup">
    <div class="flex flex-col mb-3">
      <label>Name <span class="text-red-500">*</span></label>
      <input
        v-bind="name"
        type="text"
        class="px-2 py-[6.5px] w-full rounded-md mt-2 border-2 border-gray-300 outline-1"
      />
      <span class="error-msg pl-2 pt-1">{{ errors.name }}</span>
    </div>

    <div class="flex flex-col mb-3">
      <label>Email <span class="text-red-500">*</span></label>
      <input
        v-bind="email"
        type="email"
        class="px-2 py-[6.5px] w-full rounded-md mt-2 border-2 border-gray-300 outline-1"
      />
      <span class="error-msg pl-2 pt-1">{{ errors.email }}</span>
    </div>

    <div class="flex flex-col mb-3">
      <label>Password <span class="text-red-500">*</span></label>
      <input
        v-bind="password"
        type="password"
        class="px-2 py-[6.5px] w-full rounded-md mt-2 border-2 border-gray-300 outline-1"
      />
      <span class="error-msg pl-2 pt-1">{{ errors.password }}</span>
    </div>

    <div class="flex flex-col mb-3">
      <label>Confirm password <span class="text-red-500">*</span></label>
      <input
        v-bind="confirmPassword"
        type="password"
        class="px-2 py-[6.5px] w-full rounded-md mt-2 border-2 border-gray-300 outline-1"
      />
      <span class="error-msg pl-2 pt-1">{{ errors.confirmPassword }}</span>
    </div>

    <button
      :disabled="loading"
      class="py-3 px-5 bg-blue-500 text-white rounded-lg w-full mt-8 flex justify-center disabled:opacity-80 hover:bg-blue-400"
    >
      <Loading v-if="loading" />
      <span v-else>Register</span>
    </button>

    <div class="w-full h-[2px] bg-gray-200 my-6"></div>

    <p class="text-center">
      Already has an account?
      <RouterLink class="text-blue-600" to="/auth/login">Login now</RouterLink>
    </p>
  </form>
</template>
