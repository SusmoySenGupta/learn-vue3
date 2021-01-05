<template>
  <div class="bg-gray-800 w-full p-4 flex justify-between items-center fixed" v-if="getRoutePath() != '/'">
    <div class="flex items-center gap-1">
      <div class="w-5 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </div>
      <div class="text-white font-semibold  text-xl">
        <router-link :to="{name: 'Home'}" >
          {{ title }}
        </router-link>
      </div>
    </div>
    <div class="text-white font-light flex gap-4" id="nav" @click="getRoutePath()">
      <router-link :to="{name: item.to}" v-for="item in items" :key="item.to" >
        {{ item.name }}
      </router-link> 
    </div>
    <div class="flex gap-4">
      <button class="w-7 text-green-400" @click="$emit('open-login-modal')" v-if="!isLoggedIn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg>
      </button>
      <button class="w-7 text-green-400" @click="logout()" v-else>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
import firebase from '../utilities/firebase';
export default {
  name: "AppNav",
  props: {
    title: {type: String, default: 'VueJs 3'},
    isLoggedIn: {type: Boolean, default: false}
  },
  data(){
    return {
      items: [
        {name: "DC heros", to: "DcHeros", topic: "Data, methods, computed property"  },
        {name: "Calender App", to: "Calender", topic: "JavaScript date function"  },
        {name: "Markdown App", to: "Markdown", topic: "Mixins, marked package"  },
        {name: "Slider Carousel App", to: "SliderCarousel", topic: "Virtual dom, life cycle hooks, transition & animation"  },
      ],
    }
  },
  methods:{
    getRoutePath(){
      return this.$route.path;
    },
    logout(){
      firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log('Sign-out successful.');
      }).catch((error) => {
        // An error happened.
        console.log(error);
      });
    }
  },
  created(){
    this.getRoutePath();
  }
};
</script>
<style>
#nav a.router-link-exact-active {
  color: #42b986;
  font-weight: bold;
}
</style>