<template>
  <div class="w-96 h-96  rounded-md overflow-hidden">
    <div class="w-full h-1/5 bg-gray-800 px-4 py-6 flex justify-between items-center gap-2">
      <input type="text" ref="newHeroRef" @keydown.enter="addHero()" v-model="heroName" class="w-full rounded-md py-2 px-2 focus:outline-none focus:ring-4" placeholder="Type your hero name">
      <button @click="addHero()" 
        class="bg-green-600 text-sm px-4 py-2 text-center text-white font-semibold rounded focus:outline-none focus:ring-4 hover:bg-green-600">
        Add
      </button>
    </div>
    <div class="w-full h-3/5 bg-gray-600 px-4 py-2 overflow-y-auto">
      <table class="w-full"> 
        <tr v-for="(hero,index) in dcHeros" :key="index">
          <td class="text-left text-white">{{ hero.name }}</td>
          <td class="text-right">
            <button class="w-6 rounded-full text-red-500 hover:text-red-600 focus:outline-none focus:ring-1 focus:ring-red-500" @click="removeHero(index)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </button>
          </td>
        </tr>
      </table>
    </div>
    <div class="w-full h-1/5 bg-gray-800 px-4 py-2 flex items-center">
      <h1 class="font-semibold text-white">Total heros: {{ totalHeroC }}</h1>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'DcHeros',
  data() {
    return {
      heroName: '',
      dcHeros: [
        {name: "Super Man"},
        {name: "Bat man"},
      ]
    }
  },
  methods: {
    addHero(){
      if(this.heroName !== ''){
        this.dcHeros.push({name: this.heroName});
        this.heroName = '';
      }
    },

    removeHero(index){
      this.dcHeros = this.dcHeros.filter((hero, i) => i !== index);
    }
  },
  computed: {
    totalHeroC(){
      return this.dcHeros.length;
    }
  },
  mounted(){
    this.$refs.newHeroRef.focus();
  }
}
</script>