import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../components/Home.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../components/Login.vue"),
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("../components/Register.vue"),
    },
    {
        path: "/forgot-password",
        name: "ForgetPassword",
        component: () => import("../components/ForgetPassword.vue"),
    },
    {
        path: "/password-reset/:token",
        name: "ResetPassword",
        component: () => import("../components/PasswordReset.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
