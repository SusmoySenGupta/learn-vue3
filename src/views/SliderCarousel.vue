<template>
  <div class="bg-gray-100 overflow-x-hidden">
    <AppNav title="Slider Carousel App"/>
    <div class="flex flex-wrap h-screen relative">
        <div class="w-full mt-1 absolute" v-for="(color, index) in colors" :key="index"> 
            <transition name="fade">
                <div class="h-96 " v-if="currentSlide == index" :class="color"></div>
            </transition>
        </div>
        <div class="w-full absolute h-96 ">
            <div class="w-full absolute bottom-0 flex justify-center">
                <div 
                v-for="(color,index) in colors" 
                :key="color"
                 class="h-4 w-4 rounded-full mx-1.5 shadow-md cursor-pointer" 
                :class="currentSlide == index ? 'bg-gray-600' : 'bg-gray-200'"
                @click="makeActive(index)"
                ></div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import AppNav from '@/components/AppNav';
export default {
  name: 'SliderCarousel',
  components: { AppNav },
  data() {
    return {
        currentSlide: 0,
        interval: '',
        colors: ["bg-red-500", "bg-green-500", "bg-blue-500"]
    }
  },
  methods:{
      makeActive(index){
          this.currentSlide = index;
      }
  },
  mounted(){
      this.interval = setInterval(() => {
          this.currentSlide = this.currentSlide === this.colors.length - 1 ? 0 : this.currentSlide + 1; 
      }, 2000)
  },

  beforeUnmount(){
      clearInterval(this.interval);
  }
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: all 1.5s ease;
    }
    .fade-enter-from{
        opacity: 0;
        transform: translateX(-100%);
    } 
    .fade-leave-to {
        opacity: 0;
        transform: translateX(100%);
    }
</style>