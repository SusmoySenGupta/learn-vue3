<template>
  <div>
      <button class="bg-green-500 px-14 py-4 rounded text-lg text-white text-center" @click="isModalOpen = true">Modal</button>
      <modal v-if="isModalOpen" @close-modal="isModalOpen = false">
            <template v-slot:title>
                <h1 class="text-center text-2xl font-semibold text-green-500">Modal</h1>   
            </template>
      </modal>
  </div>
</template>

<script>
import modal from '../components/Modal';
import {ref} from 'vue';
export default {
    name: 'ReuseableModal',
    components: {modal},
    setup(){
        const isModalOpen = ref(false);
        return {isModalOpen};
    }
}
</script>

<style>

</style>