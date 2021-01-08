<template>
  <div class="max-w-screen">
      <div class="flex justify-start mb-2 ml-2">
        <Create @add-new-user="addUser"/>
      </div>
      <div class="h-96 overflow-auto ml-2">
          <div class="w-screen lg:w-full align-middle inline-block min-w-full overflow-x-auto sm:rounded-lg border-b">
            <table class="min-w-full border h-full text-white bg-gray-700 shadow-2xl">
            <thead>
              <!-- <th class="border py-2 text-sm lg:text-sm text-center lg:px-8">#</th> -->
              <th class="border py-2 text-sm lg:text-sm text-center lg:px-8">Avatar</th>
              <th class="border py-2 text-sm lg:text-sm text-center lg:px-8">Name</th>
              <th class="border py-2 text-sm lg:text-sm text-center lg:px-8">Email</th>
              <th class="border py-2 text-sm lg:text-sm text-center lg:px-8">Action</th>
            </thead>
            <tbody>
              <tr v-for="(user, index) in state.users" :key="index" :class="index%2 === 0 ? 'bg-gray-600' : '' ">
                <!-- <td class="border py-2 text-sm lg:text-sm text-center lg:px-8"> {{ index + 1 }}. </td> -->
                <td class="border py-2 text-sm lg:text-sm text-center lg:px-8"> 
                  <img :src="user.avatar" :alt="user.name" class="w-10 h-10 rounded-full text-center">  
                </td>
                <td class="border py-2 text-sm lg:text-sm text-center lg:px-8 whitespace-nowrap">{{ user.name }} </td>
                <td class="border py-2 text-sm lg:text-sm text-center lg:px-8 whitespace-nowrap"> {{ user.email }} </td>
                <td class="border py-2 text-sm lg:text-sm text-center lg:px-8 whitespace-nowrap">
                    <button class="w-6 text-red-500" @click="deleteUser(user._id)">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                </td>
              </tr>
            </tbody>
            </table>
          </div>
      </div>
      <!-- <div class="flex mt-2 justify-between">
        <div class="text-gray-400">
          <p>Page: {{ state.users.page }}</p>
        </div>
        <div class="flex items-center">
          <button class="w-7 h-7 mx-1 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-white" @click="previous()" :disabled="state.users.page == 1" :class="state.users.page == 1 ? 'text-gray-500 cursor-default' : 'hover:text-gray-200'">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
            </svg>
          </button>
          <button class="w-7 h-7 mx-1 text-white rounded-full focus:outline-none focus:ring-1 focus:ring-white" @click="next()" :disabled="state.users.page == state.users.total_pages" :class="state.users.page == state.users.total_pages ? 'text-gray-500 cursor-default' : 'hover:text-gray-200'">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div> -->
      
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import axios from 'axios';
import Create from '../components/UserCrud/Create';
export default {
  components: {Create},
  setup(){
    const state = reactive({
      users: [],
    });
    onMounted(async() => {
      const {data} = await axios.get("users");
      state.users = data;
    });
    const previous = async () => {
      const {data} = await axios.get("users?page=1");
      state.users = data;
      console.log('prev');
    };
    const next = async () => {
      const {data} = await axios.get("users?page=2");
      state.users = data;
    };

    const addUser = (data) => state.users.push(data);
    const deleteUser = async (id) => {
        await axios.delete(`users/${id}`);
        state.users = state.users.filter(user => user._id !== id);
    };
    

    return {state, previous, next, addUser, deleteUser};
  }
}
</script>

<style>

</style>