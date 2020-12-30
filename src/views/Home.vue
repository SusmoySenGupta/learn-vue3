<template>
  <div class="min-h-screen max-w-full flex flex-col items-center justify-center">
    <img alt="Vue logo" src="../assets/logo.png" class="w-32">
    <p>Trying out new <b class="text-green-600">Vue 3</b></p>
    <br>
    <table class="border">
      <thead>
        <th class="border py-2 text-sm text-center px-8">#</th>
        <th class="border py-2 text-sm text-center px-8">Example</th>
        <th class="border py-2 text-sm text-center px-8">Topic</th>
      </thead>
      <tbody>
        <tr class="bg-gray-100">
          <td class="border py-2 text-sm text-center px-8"> 1. </td>
          <td class="border py-2 text-sm text-center px-8 text-blue-500"> <router-link :to="{name: 'DcHeros'}">DC heros</router-link> </td>
          <td class="border py-2 text-sm text-center px-8"> Data, methods, computed property  </td>
        </tr>
        <tr>
          <td class="border py-2 text-sm text-center px-8"> 2. </td>
          <td class="border py-2 text-sm text-center px-8 text-blue-500"> <router-link to="Calender">Calender App</router-link> </td>
          <td class="border py-2 text-sm text-center px-8"> Data, methods, computed property, date function</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border py-2 text-sm text-center px-8"> 3. </td>
          <td class="border py-2 text-sm text-center px-8 text-blue-500"> <router-link :to="{name: 'Markdown'}">Markdown App</router-link> </td>
          <td class="border py-2 text-sm text-center px-8"> Data, methods, computed property, marked package, mixins  </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',

}
</script>
