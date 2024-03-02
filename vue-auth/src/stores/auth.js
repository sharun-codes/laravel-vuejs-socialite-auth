import { defineStore } from "pinia";
import axios from "axios";
import router from "../router/index";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
        authErrors: [],
        authStatus: null,
    }),
    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors,
        status: (state) => state.authStatus,
    },
    actions: {
        async getToken() {
            await axios.get("/sanctum/csrf-cookie");
        },
        async getUser() {
            await this.getToken();
            const data = await axios.get("/api/user");
            this.authUser = data.data;
        },
        async handleLogin(data) {
            this.authErrors = [];
            await this.getToken();

            await axios
                .post("/login", data, {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                })
                .then((res) => {
                    router.push({ name: "Home" }); //Redirecting to Home page
                })
                .catch((err) => {
                    if (err.response.status === 422) {
                        this.authErrors = err.response.data.errors;
                    }
                });
        },
        async handleRegister(data) {
            this.authErrors = [];
            await this.getToken();

            await axios
                .post("/register", data, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                })
                .then((res) => {
                    router.push({ name: "Home" }); //Redirecting to Home page
                })
                .catch((err) => {
                    if (err.response.status === 422) {
                        this.authErrors = err.response.data.errors;
                    }
                });
        },
        async handleLogout() {
            await axios.post("/logout");
            this.authUser = null;
        },
        async handleForgotPassword(data) {
            this.authErrors = [];
            this.authStatus = null;
            this.getToken();

            await axios
                .post("/forgot-password", data, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                })
                .then((res) => {
                    this.authStatus = res.data.status;
                })
                .catch((err) => {
                    if (err.response.status === 422) {
                        this.authErrors = err.response.data.errors;
                    }
                });
        },
        async handleResetPassword(data) {
            this.authErrors = [];
            this.authStatus = null;

            await axios
                .post("/reset-password", data, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                })
                .then((res) => {
                    this.authStatus = res.data.status;
                    setTimeout(() => router.push({ name: "Login" }), 3000);
                })
                .catch((err) => {
                    if (err.response.status === 422) {
                        this.authErrors = err.response.data.errors;
                    }
                });
        },
        loginSocialUser(provider) {
            window.location.href = axios.defaults.baseURL + '/auth/' + provider + '/redirect'
        },
    },
});
