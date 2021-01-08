<template>
  <div class="w-full h-full flex flex-col lg:flex-row gap-1 lg:p-4">
    <div class="w-full h-1/2 lg:w-1/2 lg:h-full bg-white overflow-y-auto mt-10 lg:mt-0">
      <div class="bg-gray-50 w-full h-12 flex justify-center items-center">
        <h1 class="text-gray-400 text-xl font-light tracking-tight">Input</h1>
      </div>
      <div class="w-full h-5/6 px-2 pt-1">
        <textarea class="w-full h-full placeholder-gray-400 focus:outline-none" ref="markdownTextRef" placeholder="Type here..." :value="text" @input="update"> </textarea>
      </div>
    </div>
    <div class="w-full h-1/2 lg:w-1/2 lg:h-full bg-blue-100 overflow-y-auto">
      <div class="bg-blue-200 w-full h-12 flex justify-center items-center">
        <h1 class="text-blue-400 text-xl font-light tracking-tight">Marked</h1>
      </div>
      <div class="max-w-screen lg:w-full h-5/6 overflow-auto" v-html="markedText"> </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import marked from "marked";
import debounce from "../utilities/mixins/debounce";

export default {
  name: 'Markdown',
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
  },
  mounted(){
    this.$refs.markdownTextRef.focus();
  }
}
</script>

