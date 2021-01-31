import {createWebHistory, createRouter} from "vue-router"

const routes = [
    {
        path: "/login",
        name: "login",
        component: import("../pages/Login.vue")
    },
    {
        path: "/khs",
        name: "Khs",
        component: import("../pages/khsSelector.vue")
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})