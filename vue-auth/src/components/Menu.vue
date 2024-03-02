<script setup>
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();
</script>
<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div
            class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        >
            <img src="../assets/vue.svg" class="h-8" alt="Vue Logo" />
            <span
                class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                >Auth App</span
            >
            <div
                class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
            >
                <div
                    class="hidden w-full md:block md:w-auto navbar-right"
                    id="navbar-default"
                >
                    <ul
                        class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                    >
                        <li>
                            <router-link
                                :to="{ name: 'Home' }"
                                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
                                >Home
                            </router-link>
                        </li>
                        <template v-if="!authStore.user">
                            <li>
                                <router-link
                                    :to="{ name: 'Login' }"
                                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
                                    >Login
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    :to="{ name: 'Register' }"
                                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
                                    >Register
                                </router-link>
                            </li>
                        </template>
                        <template v-else>
                            <button @click="authStore.handleLogout">
                                Logout
                            </button>
                        </template>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
