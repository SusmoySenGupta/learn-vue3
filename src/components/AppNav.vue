<template>
  <div class="bg-gray-800 w-full p-4 grid grid-cols-10 gap-4 fixed" v-if="getRoutePath() != '/'">
    <div class=" flex items-center col-span-8 lg:col-span-2 gap-1">
      <button class="block lg:hidden w-5 text-white mr-3" @click="isMenuOpen = true">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </button>
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
    <div class="hidden lg:flex items-center justify-center text-white font-semibold col-span-6 gap-4 whitespace-nowrap" id="nav" @click="getRoutePath()">
      <router-link :to="{name: item.to}" v-for="item in items" :key="item.to" >
        {{ item.name }}
      </router-link> 
    </div>
    <div class="flex items-center justify-end col-span-2">
      <button class="w-7 text-green-400" @click="openLogin()" v-if="!isLoggedIn">
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
  <div v-if="isMenuOpen">
  <div class="z-10 bg-gray-900 opacity-90 w-screen h-screen fixed inset-0 flex justify-center items-center"></div>
  <div class="absolute inset-0">
      <div class="flex flex-col items-center justify-center h-full">
          <div class="z-20 flex flex-col gap-4 text-white text-3xl text-center" id="nav2">
            <router-link :to="{name: item.to}" v-for="item in items" :key="item.to" @click="close()">
              {{ item.name }}
            </router-link> 
          </div>
    </div>
  </div>
  <div class="absolute right-5 top-4">
      <div class="flex items-center justify-center h-full">
          <button class="z-20 w-10 text-white" @click="close()">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
    </div>
  </div>
  </div>
</template>
<script>
import firebase from '../utilities/firebase';
export default {
  name: "AppNav",
  props: {
    title: {type: String, default: 'VueJs 3'},
  },
  data(){
    return {
      items: this.$store.state.items,
      isMenuOpen: false,
    }
  },
  methods:{
    getRoutePath(){
      return this.$route.path;
    },
    logout(){
      firebase.auth().signOut().then(() => {
        this.$store.commit("setIsLoggedIn", false);
        this.$store.commit("setAuthUser", {});
      }).catch((error) => {
        console.log(error);
      });
    },
    openLogin(){
      this.$store.commit('setLoginModal', true);
    },
    close(){
      this.isMenuOpen = false;
    }
  },
  created(){
    this.getRoutePath();
  },

  computed: {
    isLoggedIn(){
      return this.$store.state.isLoggedIn;
    }
  }
};
</script>
<style>
#nav a.router-link-exact-active {
  color: #42b986;
  
}
#nav2 a.router-link-exact-active {
  color: #42b986;
  
}
</style>