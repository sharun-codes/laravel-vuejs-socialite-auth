<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();

const form = ref({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
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
                    <h1
                        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
                    >
                        Register
                    </h1>

                    <form
                        class="max-w-sm mx-auto"
                        @submit.prevent="authStore.handleRegister(form)"
                    >
                        <div class="mb-5">
                            <label
                                for="name"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Name</label
                            >
                            <input
                                type="name"
                                id="name"
                                v-model="form.name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Name"
                                required
                            />
                            <div v-if="authStore.errors.name" class="flex">
                                <span class="text-red-400 text-sm m-2 p-2">{{
                                    authStore.errors.name[0]
                                }}</span>
                            </div>
                        </div>
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
                                placeholder="Password"
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
                        <button
                            type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Submit
                        </button>
                    </form>
                    <p class="text-base text-[#adadad]">
                        Already a member?
                        <router-link
                            to="/login"
                            class="text-primary hover:underline"
                        >
                            Login
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
