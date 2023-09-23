<script setup lang="ts">
import { ref } from "vue";
import { AuthService } from "@/services";
import Loading from "../icons/Loading.vue";
import store, { useUserStore } from "@/stores";
import { useRoute, useRouter } from "vue-router";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";

const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

const schema = toTypedSchema(
  yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  })
);

const { defineInputBinds, handleSubmit, errors, setFieldError } = useForm({
  validationSchema: schema,
});

const email = defineInputBinds("email");
const password = defineInputBinds("password");
const loading = ref(false);

const handleLogin = handleSubmit(async (values) => {
  loading.value = true;
  try {
    const res = await AuthService.login(values);
    const { user, tokens } = res.data.metadata;
    userStore.setUser(user);
    localStorage["accesstoken"] = tokens.accessToken;
    router.push("/");
  } catch (error: any) {
    if (error.response) setFieldError("password", error.response.data.message);
    console.log(error.response.data.message);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <form class="w-full" @submit.prevent="handleLogin">
    <div class="flex flex-col mb-3">
      <label>Email</label>
      <input
        v-bind="email"
        type="email"
        class="px-2 py-[6.5px] w-full rounded-md mt-2 border-2 border-gray-300 outline-1"
      />
      <span v-if="errors.email" class="error-msg pl-2 pt-1">{{
        errors.email![0].toUpperCase() + errors.email?.substring(1)
      }}</span>
    </div>

    <div class="flex flex-col">
      <label>Password</label>
      <input
        v-bind="password"
        type="password"
        class="px-2 py-[6.5px] w-full rounded-md mt-2 border-2 border-gray-300 outline-1"
      />
      <span v-if="errors.password" class="error-msg pl-2 pt-1">{{
        errors.password![0].toUpperCase() + errors.password?.substring(1)
      }}</span>
    </div>
    <span class="text-green-500 pt-2" v-if="route.query.register"
      >Register successfully. Please login now!</span
    >
    <button
      :disabled="loading"
      class="py-3 px-5 bg-blue-500 text-white rounded-lg w-full mt-8 flex justify-center disabled:opacity-80 hover:bg-blue-400"
    >
      <Loading v-if="loading" />
      <span v-else>Log in</span>
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
