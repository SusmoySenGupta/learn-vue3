<template>
  <div>
      <div class="w-full h-full">
          <div class="grid grid-cols-4 gap-2">
                <div  class="col-span-4 px-2 w-72 h-8 text-gray-400 text-sm text-wider flex items-center overflow-x-auto"> 
                    <p v-if="selectedOperation">{{ previousNumber }} {{ selectedOperation }} {{ currentNumber }}</p>
                </div>
                <div class="bg-gray-800 col-span-4 px-2 w-72 h-16 mb-2 rounded shadow-inner text-white text-xl text-wider flex items-center overflow-x-auto" style="direction: rtl"> 
                  {{ currentNumber }}
                </div>
          </div>
          <div class="grid grid-cols-4 gap-2">
              <button @click="pressed('1')" class="bg-gray-800 w-16 h-16 text-lg text-white font-semibold rounded shadow-md hover:bg-green-500 hover:text-white">1</button>
              <button @click="pressed('2')" class="bg-gray-800 w-16 h-16 text-lg text-white font-semibold rounded shadow-md hover:bg-green-500 hover:text-white">2</button>
              <button @click="pressed('3')" class="bg-gray-800 w-16 h-16 text-lg text-white font-semibold rounded shadow-md hover:bg-green-500 hover:text-white">3</button>
              <button @click="pressed('+')" class="bg-gray-800 w-16 h-16 text-lg text-white font-semibold rounded shadow-md hover:bg-green-500 hover:text-white">+</button>
              <button @click="pressed('4')" class="bg-gray-800 w-16 h-16 text-lg text-white font-semibold rounded shadow-md hover:bg-green-500 hover:text-white">4</button>
              <button @click="pressed('5')" class="bg-gray-800 w-16 h-16 text-lg text-white font-semibold rounded shadow-md hover:bg-green-500 hover:text-white">5</button>
              <button @click="pressed('6')" class="bg-gray-800 w-16 h-16 text-lg text-white font-semibold rounded shadow-md hover:bg-green-500 hover:text-white">6</button>
              <button @click="pressed('-')" class="bg-gray-800 w-16 h-16 text-lg text-white font-semibold rounded shadow-md hover:bg-green-500 hover:text-white">-</button>
              <button @click="pressed('7')" class="bg-gray-800 w-16 h-16 text-lg text-white font-semibold rounded shadow-md hover:bg-green-500 hover:text-white">7</button>
              <button @click="pressed('8')" class="bg-gray-800 w-16 h-16 text-lg text-white font-semibold rounded shadow-md hover:bg-green-500 hover:text-white">8</button>
              <button @click="pressed('9')" class="bg-gray-800 w-16 h-16 text-lg text-white font-semibold rounded shadow-md hover:bg-green-500 hover:text-white">9</button>
              <button @click="pressed('*')" class="bg-gray-800 w-16 h-16 text-lg text-white font-semibold rounded shadow-md hover:bg-green-500 hover:text-white">*</button>
              <button @click="pressed('clear')" class="bg-green-500 w-16 h-16 text-lg text-white font-semibold rounded shadow-md  hover:bg-green-700">C</button>
              <button @click="pressed('0')" class="bg-gray-800 w-16 h-16 text-lg text-white font-semibold rounded shadow-md hover:bg-green-500 hover:text-white">0</button>
              <button @click="pressed('=')" class="bg-gray-800 text-lg text-white font-semibold rounded shadow-md hover:bg-green-500 hover:text-white">=</button>
              <button @click="pressed('/')" class="bg-gray-800 w-16 h-16 text-lg text-white font-semibold rounded shadow-md hover:bg-green-500 hover:text-white">/</button>
          </div>
          <div class="text-center mt-6 text-gray-400">
              Works with keyboard
          </div>
      </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import useWindowEvent from '../utilities/composition/useWindowEvent'
export default {
    name: 'Calculator',
    setup(){
        const operations = ['+', '-', '*', '/'];
        const currentNumber = ref("");
        const previousNumber = ref("");
        const selectedOperation = ref("");
        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

        const pressed = (value) => {
            if(value === '=' || value === 'Enter') calculate();  
            else if(operations.includes(value)) applyOperation(value);
            else if(value === 'clear') clear();
            else if(numbers.includes(value)) appendNumber(value);
        }

        const calculate = () =>{
            if(selectedOperation.value === '+') add();
            else if(selectedOperation.value === '-') subtract();
            else if(selectedOperation.value === '*') multiply();
            else if(selectedOperation.value === '/') divide();

            selectedOperation.value = "";
            previousNumber.value = "";
        }
        const applyOperation = (value) => {
            calculate();
            previousNumber.value = currentNumber.value;
            currentNumber.value = "";
            selectedOperation.value = value;
        }
        const appendNumber = (value) =>  currentNumber.value = currentNumber.value + value;        
        const clear = () => currentNumber.value = "";
        const add = () => currentNumber.value = +previousNumber.value + +currentNumber.value;    
        const subtract = () => currentNumber.value = +previousNumber.value - +currentNumber.value;    
        const multiply = () => currentNumber.value = +previousNumber.value * +currentNumber.value;    
        const divide = () =>  currentNumber.value = +previousNumber.value / +currentNumber.value;    

        const handleKeyDown = (e) => pressed(e.key);

        useWindowEvent("keydown", handleKeyDown);

        return {currentNumber, pressed, selectedOperation, previousNumber}
    }
}
</script>

<style>

</style>