<template>
  <div class=" flex flex-col items-center justify-center">
    <img alt="Vue logo" src="../assets/logo.png" class="w-32">
    <p class="text-white">Trying out new <b class="text-green-600">Vue 3</b></p>
    <br>
    <div class="h-72 shadow-xl rounded overflow-auto">
      <table class="border h-full text-white bg-gray-700 shadow-xl">
        <thead>
          <th class="border py-2 text-sm text-center px-8">#</th>
          <th class="border py-2 text-sm text-center px-8">Example</th>
          <th class="border py-2 text-sm text-center px-8">Topic</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index" :class="index%2 === 0 ? 'bg-gray-600' : '' ">
            <td class="border py-2 text-sm text-center px-8"> {{ index + 1 }}. </td>
            <td class="border py-2 text-sm text-center px-8 text-green-500"> <router-link :to="{name: item.to}">{{ item.name }}</router-link> </td>
            <td class="border py-2 text-sm text-center px-8 w-60 whitespace-nowrap"> {{ item.topic }}  </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-4 text-white ">
      <p class=""><strong>Other topics:</strong> Authentication(Firebase), Composition Api, Teleport</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      items: [
        {name: "DC heros", to: "DcHeros", topic: "Data, methods, computed property"  },
        {name: "Calender", to: "Calender", topic: "JavaScript date function"  },
        {name: "Markdown", to: "Markdown", topic: "Mixins, marked package, two way data binding"  },
        {name: "Slider", to: "SliderCarousel", topic: "Virtual dom, life cycle hooks, transition & animation"  },
        {name: "Calculator", to: "Calculator", topic: "Composition api, life cycle hooks"  },
        {name: "Reuseable Modal", to: "ReuseableModal", topic: "Solts"  },
        {name: "Chat", to: "Chat", topic: "Realtime chatting app"  },
      ],
    }
  },

}
</script>
