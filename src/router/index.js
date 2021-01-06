import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import DcHeros from "@/views/DcHeros.vue";
import Calender from "@/views/Calender.vue";
import Markdown from "@/views/Markdown.vue";
import SliderCarousel from "@/views/SliderCarousel.vue";
import Calculator from "@/views/Calculator.vue";
import ReuseableModal from "@/views/ReuseableModal.vue";
import Chat from "@/views/Chat.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
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
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  base: "/practice/",
});

export default router;
