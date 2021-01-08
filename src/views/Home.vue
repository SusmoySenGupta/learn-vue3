<template>
  <div class="max-w-screen max-h-screen flex flex-col items-center justify-center overflow-scroll absolute inset-0">
    <div class="mb-4 flex flex-col items-center justify-center">
      <img alt="Vue logo" src="../assets/logo.png" class="w-20">
      <p class="text-white">Trying out new <b class="text-green-500">Vue 3</b></p>
      <a class="mt-1 text-gray-400 flex items-center gap-1" href="https://github.com/SusmoySenGupta/learn-vue3" target="_blank">
       <span>source code</span>
        <span>
          <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </span></a>
    </div>
    <div class="block lg:hidden w-screen h-72 overflow-hidden px-4">
      <div class="w-full h-full shadow-xl rounded overflow-auto">
        <table class=" border h-full text-white bg-gray-700 shadow-xl">
          <thead>
            <th class="border py-2 text-sm text-center px-8">#</th>
            <th class="border py-2 text-sm text-center px-8">Application</th>
            <th class="border py-2 text-sm text-center px-8">Topic</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index" :class="index%2 === 0 ? 'bg-gray-600' : '' ">
              <td class="border py-2 text-sm text-center px-8"> {{ index + 1 }}. </td>
              <td class="border py-2 text-sm text-center px-8 text-green-500"> <router-link :to="{name: item.to}">{{ item.name }}</router-link> </td>
              <td class="border py-2 text-sm text-center px-8 "> {{ item.topic }}  </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="block mt-4 text-white lg:hidden">
      <p class=""><strong>Other topics:</strong> Authentication(Firebase), Composition Api, Teleport</p>
    </div>
    <div class="hidden lg:grid lg:grid-cols-5 gap-6">
      <router-link :to="{name: item.to}" class="bg-gray-800 text-white w-44 h-52 rounded-md p-2 transition duration-300 ease-in-out hover:shadow-2xl hover:bg-green-500  transform hover:-translate-y-1 hover:scale-110" v-for="item in items" :key="item.to">
        <h1 class="font-semibold text-center mt-1">{{ item.name }}</h1>
        <p class="font-semibold text-sm mt-4 mb-2 ml-2">Topics covered: </p>
        <ul class="list-disc list-inside ml-2 text-sm">
          <li v-for="topic in item.topic" :key="topic">{{topic}}</li>
        </ul>
      </router-link>
      <div class="bg-gray-800 text-white w-44 h-52 overflow-auto rounded-md p-2 transition duration-300 ease-in-out hover:shadow-2xl hover:bg-green-500  transform hover:-translate-y-1 hover:scale-110" >
        <h1 class="font-semibold text-center mt-1">Login</h1>
        <p class="font-semibold text-sm mt-4 mb-2 ml-2">Topics covered: </p>
        <ul class="list-disc list-inside ml-2 text-sm">
          <li>Create Modal</li>
          <li>Vue custom events emitting</li>
          <li>Form Handling</li>
          <li>Firebase authentication</li>
          <li>Loading effect</li>
          <li>Template refs</li>
          <li>Component props</li>
          <li>Firebase google login</li>
          <li>Refactoring with component</li>
          <li>vue3 teleport</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      items: this.$store.state.items
    }
  },

}
</script>
