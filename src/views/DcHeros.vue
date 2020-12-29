<template>
  <div class="DcHeros bg-gray-100 w-full min-h-screen">
    <AppNav title="DC Heros"/>
    <div class="min-h-screen  w-full flex flex-col justify-center items-center">
      <div class=" w-80 h-16 mt-4 flex justify-center items-center gap-2">
        <input type="text" @keydown.enter="addHero()" v-model="heroName" class="rounded-md py-2 px-1 border" placeholder="Type your hero name">
        <button @click="addHero()" class="bg-green-500 text-sm px-4 py-2 text-center text-white font-semibold rounded hover:bg-green-600">Add</button>
      </div>
      <div class="bg-gray-200 rounded w-80 px-9 py-2 h-64 my-4 overflow-y-auto">
       <table class="w-full"> 
         <tr v-for="(hero,index) in dcHeros" :key="index">
           <td class="text-left">{{ hero.name }}</td>
           <td class="text-right">
             <button class="w-6 rounded-full text-red-500 hover:text-red-600" @click="removeHero(index)">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
             </button>
           </td>
         </tr>
       </table>
      </div>
      <div>Total heros: {{ totalHeroC }}</div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import AppNav from '@/components/AppNav'
export default {
  name: 'DcHeros',
  components: { AppNav },
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
  }
}
</script>