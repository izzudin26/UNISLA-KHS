import {createWebHistory, createRouter} from "vue-router"

const routes = [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        name: "login",
        component: import("../pages/Login.vue")
    },
    {
        path: "/khs",
        name: "Khs",
        component: import("../pages/khsSelector.vue")
    },
    {
        path: "/khs/:semester",
        name: "Khs semester",
        component: import("../pages/khs.vue")
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})