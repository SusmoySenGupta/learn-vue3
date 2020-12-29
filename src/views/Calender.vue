<template>
  <div class="bg-gray-100">
    <AppNav title="Calender App"/>
    <div class="min-h-screen  w-full flex justify-center items-center">
        <div class="bg-white rounded-md  lg:mt-4 lg:mx-96 border overflow-hidden shadow-md">
            <div class="bg-gray-600 p-2 mb-3 text-center text-lg lg:text-2xl text-white font-semibold flex justify-between items-center">
                <button class="w-7 hover:text-gray-300" @click="prevMonth()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                    </svg>
                </button>
                <p>{{ currentMonthName }}, {{ currentYear }}</p>
                <button class="w-7 hover:text-gray-300" @click="nextMonth()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <div class="flex">
                <p class="text-center lg:text-2xl" style="width: 14.28%" v-for="(day,index) in days" :key="index">{{ day }}</p>
            </div>
            <div class="flex flex-wrap mb-3">
                <p class="text-center lg:text-2xl" style="width: 14.28%" v-for="(num) in startDay()" :key="num"></p>
                <p class="text-center lg:text-2xl" style="width: 14.28%" v-for="(num) in daysInMonth()" :key="num" :class="currentDateClass(num)">{{ num }}</p>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import AppNav from '@/components/AppNav'
export default {
  name: 'Calender',
  components: { AppNav },
  data() {
    return {
        currentDay: new Date().getUTCDate(),
        currentMonth: new Date().getMonth(),
        currentYear: new Date().getFullYear(),
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']
    }
  },
  methods: {
      daysInMonth(){
          return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
      },
      startDay(){
          return new Date(this.currentYear, this.currentMonth).getDay();
      },
      nextMonth(){
          if(this.currentMonth === 11){
              this.currentMonth = 0;
              this.currentYear ++;
          } else {
              this.currentMonth ++;
          }
          
      },
      prevMonth(){
          if(this.currentMonth === 0){
              this.currentMonth = 11;
              this.currentYear --;
          } else {
              this.currentMonth --;
          }
      },

      currentDateClass(num){
          let curr = new Date().toDateString();
          let date = new Date(this.currentYear, this.currentMonth, num).toDateString();
          return curr === date  ? 'font-bold text-green-500' : '' ;
      }
  },
  computed:{
      currentMonthName(){
        return new Date(this.currentYear, this.currentMonth).toLocaleString("default", {month: "long"});  
      } 
  }
 
   
}
</script>