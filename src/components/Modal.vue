<template>
  <div>
        <div @click="close()" class="z-10 bg-gray-600 opacity-80 w-screen h-screen fixed inset-0 flex justify-center items-center"></div>
        <div class="absolute inset-0 ">
            <div class=" flex items-center justify-center h-full">
                <div class="z-20  w-96 min-h-96 rounded overflow-auto p-5">
                    <div class="border rounded h-full">
                        <div class="bg-gray-700 p-2 h-1/6 text-white flex items-center justify-center">
                            <slot name="title"> Title </slot>
                        </div>
                        <div class="bg-gray-500 w-full p-2 h-4/6 text-white flex flex-col items-center gap-2">
                            <slot name="body"> Body </slot>
                        </div>
                        <div class="bg-gray-700 p-2 h-1/6 text-white flex items-center justify-center">
                            <slot name="footer"> Footer </slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'Modal',
    setup(_, {emit}){
        const close = () => emit('close-modal');
        return {close};
    }
}
</script>

<style>

</style>