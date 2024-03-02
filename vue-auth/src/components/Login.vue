<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();

const form = ref({
    email: "",
    password: "",
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
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <div class="my-2">
                        <a href="#">
                            <button
                                @click="authStore.loginSocialUser('google')"
                                class="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
                            >
                                <img
                                    src="https://www.svgrepo.com/show/355037/google.svg"
                                    class="w-6 h-6"
                                    alt=""
                                />
                                <span class="dark:text-gray-300">
                                    Login with Google
                                </span>
                            </button>
                        </a>

                        <a href="#">
                            <button
                                @click="authStore.loginSocialUser('github')"
                                class="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    class="dark:text-white"
                                >
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                    />
                                </svg>
                                <span class="dark:text-gray-300">
                                    Login with Github
                                </span>
                            </button>
                        </a>
                    </div>
                    <div class="relative flex py-5 items-center">
                        <div class="flex-grow border-t border-gray-400"></div>
                        <span class="flex-shrink mx-4 text-gray-400">OR</span>
                        <div class="flex-grow border-t border-gray-400"></div>
                    </div>
                    <h1
                        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
                    >
                        Login
                    </h1>

                    <form
                        class="max-w-sm mx-auto"
                        @submit.prevent="authStore.handleLogin(form)"
                    >
                        <div class="mb-5">
                            <label
                                for="email"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Email</label
                            >
                            <input
                                type="email"
                                id="email"
                                v-model="form.email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@abc.com"
                                required
                            />
                            <div v-if="authStore.errors.email" class="flex">
                                <span class="text-red-400 text-sm m-2 p-2">{{
                                    authStore.errors.email[0]
                                }}</span>
                            </div>
                        </div>
                        <div class="mb-5">
                            <label
                                for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Password</label
                            >
                            <input
                                type="password"
                                id="password"
                                v-model="form.password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                            <div v-if="authStore.errors.password" class="flex">
                                <span class="text-red-400 text-sm m-2 p-2">{{
                                    authStore.errors.password[0]
                                }}</span>
                            </div>
                        </div>
                        <button
                            type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Submit
                        </button>
                    </form>
                    <router-link
                        to="/forgot-password"
                        class="mb-2 inline-block text-base text-[#adadad] hover:text-primary hover:underline"
                    >
                        Forgot Password?
                    </router-link>
                    <p class="text-base text-[#adadad]">
                        Not a member yet?
                        <router-link
                            to="/register"
                            class="text-primary hover:underline"
                        >
                            Sign Up
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
