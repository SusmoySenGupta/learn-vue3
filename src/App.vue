<template>
  <div id="main">
    <AppNav @open-login-modal="isOpen = true" />
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
    }
  },
  mounted(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("setIsLoggedIn", true);
        this.$store.commit("setAuthUser", user);
      } else {
        this.$store.commit("setIsLoggedIn", false);
        this.$store.commit("setAuthUser", {});
      }
    });
  }
}
</script>

<style>

</style>
