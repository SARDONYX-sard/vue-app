import { createRouter, createWebHistory } from "vue-router";
import Home from "./src/components/views/home.vue";
import Diary1 from "./src/components/views/diary1.vue";

import NotFound from "./src/components/views/notfound.vue";

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/diary1",
      name: "diary1",
      component: Diary1,
    },
    {//該当ページが見つからない404
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: NotFound,
    },
  ],
});

export default router;
