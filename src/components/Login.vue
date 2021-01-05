<template>
    <div>
        <div @click="close()" class="z-10 bg-gray-600 opacity-80 w-screen h-screen fixed top-0 flex justify-center items-center"></div>
        <div class="absolute inset-0 ">
            <div class=" flex items-center justify-center h-full">
                <div class="z-20 bg-white w-96 rounded overflow-hidden p-5 ">
                    <div class="border p-3 rounded">
                        <h1 class="text-center text-2xl font-semibold text-green-500">Login</h1>
                        <form action="" @submit.prevent="login()">
                            <div class="flex flex-col gap-4 my-2">
                                <div>
                                    <label for="" class="text-lg">Email</label>
                                    <input type="email" ref="emailRef" v-model="form.email" class="block w-full py-2 px-1 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Type your email">
                                </div>
                                <div>
                                    <label for="" class="text-lg">Password</label>
                                    <input type="password" v-model="form.password" class="block w-full py-2 px-1 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Type your email">
                                </div>
                                <div>
                                    <button type="submit" class="flex justify-center w-full py-2 mt-1 bg-green-500 text-white text-lg text-center font-semibold rounded focus:outline-none focus:ring-4 focus:ring-gray-500">
                                        <span v-if="!isLoading">Login</span> 
                                        <span v-else-if="isLoading">
                                            <svg class="w-7 animate-spin svg-inline--fa fa-circle-notch " aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-notch" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"></path></svg>
                                        </span> 
                                    </button>
                                </div>
                                <google-login @close-login-from-google="close()"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from '../utilities/firebase';
import GoogleLogin from './login/GoogleLogin.vue';
export default {
    name: 'Login',
    components:{GoogleLogin},
    data(){
        
        return{
            form:{
                email: 'susmoy@gmail.com',
                password: '123456'
            },
            isLoading: false
        }
    },

    methods:{
       login(){
           this.isLoading = true;
           firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
            .then((user) => {
                // Signed in 
                console.log(user);
                this.isLoading = false;
                this.form.email = '';
                this.form.password = '';
                this.close();
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
       },
       
       close(){
           this.$emit('close-modal');
       }
    },
    mounted(){
        this.$refs.emailRef.focus();
    }
}
</script>

<style>

</style>

