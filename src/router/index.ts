import { createRouter, createWebHistory } from "vue-router";
import Layout from "../components/Layout.vue";
import Home from "../pages/Home.vue";
import WorkPage from "../pages/WorkPage.vue";
import AboutPage from "../pages/AboutPage.vue";
import ContactPage from "../pages/ContactPage.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        { path: "", component: Home },
        { path: "work", component: WorkPage },
        { path: "about", component: AboutPage },
        { path: "contact", component: ContactPage },
      ],
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});
