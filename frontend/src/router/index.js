import {createWebHistory, createRouter} from "vue-router"

const routes = [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        name: "login",
        component: import("../pages/Login.vue"),
        meta: {title: "Login"}
    },
    {
        path: "/khs",
        name: "Khs",
        component: import("../pages/khsSelector.vue"),
        meta: {title: "Pilih KHS"}
    },
    {
        path: "/khs/:semester",
        name: "Khs semester",
        component: import("../pages/khs.vue"),
        meta: {title: "KHS"}

    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})