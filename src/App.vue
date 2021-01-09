<template>
  <div id="main" class="font-sans">
    <AppNav />
    <div class="w-screen h-screen bg-gray-700 pt-12">
      <div class="w-full h-full flex justify-center items-center overflow-hidden">
        <router-view/>
      </div>
    </div>
    <teleport to='body'>
      <Login />
    </teleport>
  </div>
</template>


<script>
import AppNav from '@/components/AppNav';
import Login from '@/components/Login';
import firebase from '@/utilities/firebase'
export default {
  components: {AppNav, Login},
  mounted(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("setIsLoggedIn", true);
        this.$store.commit("setAuthUser", user);
        this.$store.commit("setLoginModal", false);
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
