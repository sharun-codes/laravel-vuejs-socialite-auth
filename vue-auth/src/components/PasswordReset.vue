<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRoute } from "vue-router";

const route = useRoute();
const authStore = useAuthStore();

const form = ref({
  password: "",
  password_confirmation: "",
  email: route.query.email,
  token: route.params.token,
});
</script>
<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div
            class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
        >
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
            >
                <div
                    v-if="!authStore.user"
                    class="p-6 space-y-4 md:space-y-6 sm:p-8"
                >
                    <h1
                        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
                    >
                        Reset Password
                    </h1>

                    <form
                        class="max-w-sm mx-auto"
                        @submit.prevent="authStore.handleResetPassword(form)"
                    >
                        <div class="mb-5">
                            <label
                                for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >New Password</label
                            >
                            <input
                                type="password"
                                id="password"
                                v-model="form.password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="New Password"
                                required
                            />
                            <div v-if="authStore.errors.password" class="flex">
                                <span class="text-red-400 text-sm m-2 p-2">{{
                                    authStore.errors.password[0]
                                }}</span>
                            </div>
                        </div>
                        <div class="mb-5">
                            <label
                                for="password_confirmation"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Confirm Password</label
                            >
                            <input
                                type="password"
                                id="password_confirmation"
                                v-model="form.password_confirmation"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Password Confirmation"
                                required
                            />
                        </div>
                        <div v-if="authStore.status" class="flex">
                                <span
                                    class="text-green-600 font-semibold rounded-md m-2 p-2"
                                >
                                    {{ authStore.status }}
                                </span>
                        </div>
                        <button
                            type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Reset Password
                        </button>
                    </form>
                </div>

                <div v-else>
                    <h3>
                        Already loggedin! Please go to
                        <router-link
                            to="/"
                            class="text-primary hover:underline"
                        >
                            Home!
                        </router-link>
                    </h3>
                </div>
            </div>
        </div>
    </section>
</template>
