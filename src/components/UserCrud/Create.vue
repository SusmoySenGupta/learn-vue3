<template>
  <div>
    <button @click="isModalOpen = true" class="flex items-center gap-1 bg-green-500 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white hover:bg-green-700">
        <span class="">
            <svg class="w-7 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
            </svg>
        </span>
        <span>Add new</span>
    </button>
    <teleport to='body'>
        <modal v-if="isModalOpen" @close-modal="isModalOpen = false">
        <template #title>
            <h1 class="text-xl font-semibold">Add new user</h1>
        </template>
        <template #body>
            <div class="w-full flex flex-col gap-2 mb-2">
            <div class="w-full">
                <label for="" class="text-lg">Name</label>
                <input type="text" class="block bg-gray-800 w-full mt-0.5 p-2 rounded" placeholder="Type name" v-model="state.form.name">
            </div>
            <div class="w-full">
                <label for="" class="text-lg">Email</label>
                <input type="email" class="block bg-gray-800 w-full mt-0.5 p-2 rounded" placeholder="Type email" v-model="state.form.email">
            </div>
            <div class="w-full">
                <label for="" class="text-lg">Avatar</label>
                <input type="text" class="block bg-gray-800 w-full mt-0.5 p-2 rounded" placeholder="Avatar link" v-model="state.form.avatar">
            </div>
            </div>
        </template>
        <template #footer>
            <div class="w-full flex flex-row-reverse justify-start gap-2">
            <button class="bg-green-500 px-2.5 py-1.5 text-white rounded focus:outline-none focus:ring-2 focus:ring-white hover:bg-green-700" @click="submit()">Add user</button>
            <button @click="isModalOpen = false" class="px-2.5 py-1.5 text-white rounded border-2 focus:outline-none focus:ring-2 focus:ring-green-500 hover:bg-white hover:text-gray-700">Cancel</button>
            </div>
        </template>
        </modal>
    </teleport>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import modal from '../Modal';
import axios from 'axios';

export default {
    name: "UserCrud Create",
    components: {modal},
    setup(_, { emit }){
        const isModalOpen = ref(false);
        const state = reactive({
            form: {
                name: "",
                email: "",
                avatar: ""
            }
        });
        const submit = async () => {
            if(state.form.name && state.form.email && state.form.avatar){
                const {data} = await axios.post("users", state.form);
                emit("add-new-user", data);
                state.form.name = "";
                state.form.email = "";
                state.form.avatar = "";
                isModalOpen.value = false;
            }
        };
        
        return {state, isModalOpen, submit};
    }
}
</script>

<style>

</style>