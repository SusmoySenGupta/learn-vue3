<template>
  <div id="main">
    <AppNav @open-login-modal="isOpen = true" :isLoggedIn="isLoggedIn"/>
    <div class="w-screen h-screen bg-gray-700 pt-12">
      <div class="w-full h-full flex justify-center items-center overflow-hidden">
        <router-view/>
      </div>
    </div>
    <teleport to='body'>
      <Login v-if="isOpen" @close-modal="isOpen = false" />
    </teleport>
  </div>
</template>


<script>
import AppNav from '@/components/AppNav';
import Login from '@/components/Login';
import firebase from '@/utilities/firebase'
export default {
  components: {AppNav, Login},
  data(){
    return {
        isOpen: false,
        isLoggedIn: false,
        authUser: {},
    }
  },
  mounted(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.isLoggedIn = true;
        this.authUser = user;
      } else {
        // No user is signed in.
        this.isLoggedIn = false;
        this.authUser = {}
      }
    });
  }
}
</script>

<style>

</style>
