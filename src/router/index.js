import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import DcHeros from "@/views/DcHeros.vue";
import Calender from "@/views/Calender.vue";
import Markdown from "@/views/Markdown.vue";
import SliderCarousel from "@/views/SliderCarousel.vue";
import Calculator from "@/views/Calculator.vue";
import ReuseableModal from "@/views/ReuseableModal.vue";
import Chat from "@/views/Chat.vue";
import Crud from "@/views/Crud.vue";
import store from "../store/index.js";
import ObjectDetection from "@/views/ObjectDetection";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dc-heros",
    name: "DcHeros",
    component: DcHeros,
  },
  {
    path: "/calender",
    name: "Calender",
    component: Calender,
  },
  {
    path: "/markdown",
    name: "Markdown",
    component: Markdown,
  },
  {
    path: "/slider-carousel",
    name: "SliderCarousel",
    component: SliderCarousel,
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: Calculator,
  },
  {
    path: "/reuseable-modal",
    name: "ReuseableModal",
    component: ReuseableModal,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
    meta: { middleware: "auth" },
  },
  {
    path: "/crud",
    name: "Crud",
    component: Crud,
  },
  {
    path: "/tensorflow",
    name: "ObjectDetection",
    component: ObjectDetection,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  base: "/practice/",
});

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = require(`../middleware/${to.meta.middleware}`);
    if (middleware) {
      middleware.default(next, store);
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
