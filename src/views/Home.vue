<template>
  <div class="min-h-screen max-w-full flex flex-col items-center justify-center">
    <img alt="Vue logo" src="../assets/logo.png" class="w-32">
    <p>Trying out new <b class="text-green-600">Vue 3</b></p>
    <br>
    <div class="h-64 shadow-sm rounded overflow-y-auto">
      <table class="border h-full">
        <thead>
          <th class="border py-2 text-sm text-center px-8">#</th>
          <th class="border py-2 text-sm text-center px-8">Example</th>
          <th class="border py-2 text-sm text-center px-8">Topic</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index" :class="index%2 === 0 ? 'bg-gray-100' : '' ">
            <td class="border py-2 text-sm text-center px-8"> {{ index + 1 }}. </td>
            <td class="border py-2 text-sm text-center px-8 text-blue-500"> <router-link :to="{name: item.to}">{{ item.name }}</router-link> </td>
            <td class="border py-2 text-sm text-center px-8 w-60"> {{ item.topic }}  </td>
          </tr>
        </tbody>
      </table>
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
        {name: "Calender App", to: "Calender", topic: "JavaScript date function"  },
        {name: "Markdown App", to: "Markdown", topic: "Mixins, marked package"  },
        {name: "Slider Carousel App", to: "SliderCarousel", topic: "Virtual dom, life cycle hooks, transition & animation"  },
      ],
    }
  }

}
</script>
