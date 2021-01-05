<template>
  <div>
    <div class="text-center">
        <span class="font-semibold">Or</span> 
        <button class="text-blue-500 ml-1" @click="loginWithGoogle()"> Login with google </button>
    </div>
  </div>
</template>

<script>
import firebase from '../../utilities/firebase';
export default {
    name: 'google-login',
    methods: {
        loginWithGoogle(){
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                this.close();
            }).catch((error) => {
                console.log(error);
            });
       },
       close(){
           this.$emit('close-login-from-google');
       }
    }
}
</script>

<style>

</style>