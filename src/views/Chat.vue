<template>
  <div>
      <div class="bg-gray-800 w-80 h-96 rounded-xl overflow-hidden shadow-2xl">
        <div class="w-full h-5/6">
            <div class="bg-purple-500 w-full h-1/6 px-2 flex items-center justify-center">
                <h1 class="text-white text-lg font-semibold">Chat</h1>
            </div>
            <div class="w-full h-5/6 p-2 overflow-y-auto flex flex-col gap-2 overflow-hidden" v-if="userId">
                <div class="text-white px-2 py-1" v-for="chat in state.chats" :key="chat.id" :class="getUserColor(chat.userId)">{{ chat.message }}</div>
            </div>
        </div>
        <div class="w-full h-1/6 relative">
            <input type="text" class="bg-gray-600 absolute  w-full h-full focus:outline-none shadow-inner px-2 focus:ring-2 focus:ring-purple-600 pr-16 text-gray-100"
                    placeholder="Aa" v-model="state.message" @keydown.enter="addMessage()" />
            <button class="w-7 text-pink-500 absolute top-5 right-3 hover:text-pink-800 focus:outline-none" @click="addMessage()">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>
            </button>
        </div>
      </div>
      <div class="mt-6 text-gray-400 text-xl text-center animate-pulse" v-if="!userId">
          Please login first...
      </div>
  </div>
</template>
<script>
import {chatsRef} from '../utilities/firebase';
import {useStore} from 'vuex';
import { computed, onMounted, reactive } from 'vue';
export default {
    name: "Chat",
    setup(){
        const state = reactive({
            chats: [],
            message: '',
        });
        const store = useStore();
        const userId = computed(() => {return store.state.authUser.uid});

        const addMessage = () => {
            const newChat = chatsRef.push();
            newChat.set({userId: userId.value, message: state.message});
            state.message = "";
        };
        const getUserColor = (uid) => {
           return  uid == userId.value ? 'text-right ' : 'rounded-r-full bg-gradient-to-r from-purple-500 to-pink-500 '
        };
        onMounted(async () => {
            chatsRef.on("child_added", (snapshot) => {
                state.chats.push({ key: snapshot.key, ...snapshot.val() });
            });
        });

        return {state, addMessage, getUserColor, userId}
    }
}
</script>

<style>

</style>