<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();

onMounted(async () => {
    await authStore.getUser();
});
</script>
<template>
    <div class="max-w-7xl mx-auto">
        <div v-if="authStore.user">
            <h1>Welcome {{ authStore.user.name }}!</h1>
            <p>Your Email is {{ authStore.user.email }}</p>
        </div>
        <div v-else>
            <h3>
                Please
                <router-link to="/login" class="text-primary hover:underline">
                    Login!
                </router-link>
            </h3>
        </div>
    </div>
</template>
