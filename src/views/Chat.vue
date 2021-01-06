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
        <input type="text" class="bg-gray-600 w-full h-1/6 focus:outline-none shadow-inner px-2 focus:ring-4 focus:ring-purple-600 text-right text-gray-100"
            placeholder="Aa" v-model="state.message" @keydown.enter="addMessage()" >
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