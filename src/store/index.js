import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      authUser: {},
      isLoginModalOpen: false,
      items: [
        {
          name: "DC heros",
          to: "DcHeros",
          topic: [
            "v-for, v-bind, v-model, v-on",
            "methods",
            "computed properties ( getters & setters)",
            "vue components",
          ],
        },
        {
          name: "Calender",
          to: "Calender",
          topic: ["JavaScript date function", "Vue Router"],
        },
        {
          name: "Markdown",
          to: "Markdown",
          topic: ["Mixins", "Vue Mixins"],
        },
        {
          name: "Slider",
          to: "SliderCarousel",
          topic: [
            "Virtual dom",
            "Life cycle hooks",
            "Vue transition & animation",
          ],
        },
        {
          name: "Calculator",
          to: "Calculator",
          topic: [
            "Resuable composition api",
            "Window event listener",
            "Composition API",
          ],
        },
        {
          name: "Reuseable Modal",
          to: "ReuseableModal",
          topic: ["Slots", "Named slots"],
        },
        {
          name: "Chat",
          to: "Chat",
          topic: [
            "Firebase Realtime Database",
            "Vuex v4",
            "Custom Router middleware",
          ],
        },
        {
          name: "User crud",
          to: "Crud",
          topic: [
            "Using axios",
            "External API",
            "Reactive vue3 api",
            "Pagination",
            "Envirnment variable (.env file)",
          ],
        },
        {
          name: "Object detection",
          to: "ObjectDetection",
          topic: [
            "Using Tensorflow with Vue",
            "Device Camera Open",
            "Working with Canvas",
          ],
        },
      ],
    };
  },

  mutations: {
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
    setAuthUser(state, payload) {
      state.authUser = payload;
    },
    setLoginModal(state, payload) {
      state.isLoginModalOpen = payload;
    },
  },
});
export default store;
