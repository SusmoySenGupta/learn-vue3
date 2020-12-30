<template>
  <div class="bg-gray-100">
    <AppNav title="Markdown App"/>
    <div class="h-screen pt-12 w-full px-32 flex flex-col lg:flex-row justify-center items-center gap-1">
        <div class="w-1/2 h-96 border bg-white shadow-md rounded-md overflow-hidden p-0.5">
          <textarea class="w-full min-h-full placeholder-gray-400" placeholder="Type here..." :value="text" @input="update"> </textarea>
        </div>
        <div class="w-1/2 h-96 border bg-gray-50 shadow-md rounded-md overflow-hidden p-0.5" v-html="markedText"></div>
        
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import AppNav from '@/components/AppNav';
import marked from "marked";
import debounce from "../utilities/mixins/debounce";

export default {
  name: 'Markdown',
  components: { AppNav },
  mixins: [debounce],
  data() {
    return {
      text: '',
    }
  },
  methods: {
    update(event){
      const task = () => (this.text = event.target.value);
      this.debounce(task, 400);
    }, 
  },
  computed:{
    markedText(){
      return marked(this.text);
    }
  }  
}
</script>

