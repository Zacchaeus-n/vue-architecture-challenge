import { createRouter, createWebHistory } from "vue-router";
import RegisterPage from "@/views/RegisterPage";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", name: "RegisterPage", component: RegisterPage }],
});

export default router;
