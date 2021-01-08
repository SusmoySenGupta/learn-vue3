<template>
    <div class="flex flex-col items-center gap-4">
        <div class="text-center text-white text-xl"> Object Detection with Tensorflow JS </div>
        <div>
            <div v-if="!isStreaming">
                <button @click="openCamera()" class="flex items-center gap-1 bg-green-500 text-sm text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white hover:bg-green-700">
                    <span class="">
                        <svg class="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                    </span>
                    <span>Open camera</span>
                </button>
            </div>
            <div class="flex justify-between gap-2" v-else>
                <button @click="stopStreaming()" class="flex items-center gap-1 border-2 border-red-500 text-sm text-white px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white hover:bg-red-500">
                    <span class="">
                        <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    <span>Close camera</span>
                </button>
                <button @click="snapshot()" class="flex items-center gap-1 bg-green-500 text-sm text-white px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white hover:bg-green-700">
                    <span class="">
                        <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    <span>Take snap</span>
                </button>
            </div>
        </div>
        <!-- <div class="w-56 bg-black" v-if="!isStreaming"></div> -->
        <video ref="videoRef"  autoplay="true" class="w-56" :class="isStreaming ? 'block' : 'hidden'" />
        <div>
            <img class="w-56" :src="src" alt="mobile" ref="imgRef" crossorigin="anonymous">
        </div>
        <div>
            <button class="px-3 py-2 flex items-center justify-center bg-purple-500 text-white text-lg rounded hover:bg-purple-700" @click="detect()">
                <span v-if="!isLoading">Detect object</span> 
                <span v-else-if="isLoading">
                    <svg class="w-7 animate-spin svg-inline--fa fa-circle-notch " aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-notch" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"></path></svg>
                </span> 
            </button>
        </div>
        <div v-if="predictions.length > 0">
            <p class="mb-3 text-xl text-white animate-pulse">Object detected!</p>
            <ul class="list-inside text-white">
                <li class="" v-for="(prediction,index) in predictions" :key="index">{{ prediction.class }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import {ref } from 'vue';
require('@tensorflow/tfjs-backend-cpu');
require('@tensorflow/tfjs-backend-webgl');
const cocoSsd = require('@tensorflow-models/coco-ssd');
export default {
    name: "Object Detection",
    setup(){
        const imgRef = ref("");
        const predictions = ref([]);
        const isLoading = ref(false);
        const videoRef = ref(false);
        const isStreaming = ref(false);
        const prevSrc = "https://images.unsplash.com/photo-1586953208448-b95a79798f07";
        const src = ref(prevSrc);

        const detect = async () => {
            isLoading.value = true;
            const img = imgRef.value;
            const model = await cocoSsd.load();
            predictions.value = await model.detect(img);
            isLoading.value = false;
        };
        async function openCamera() {
            if (navigator.mediaDevices.getUserMedia) {
                const devices = await navigator.mediaDevices.enumerateDevices();
                const cams = devices.filter((device) => device.kind === "videoinput");
                const camId = cams[0].deviceId;
                const video = cams.length === 1 ? true : { deviceId: { exact: camId } };
                navigator.mediaDevices.getUserMedia({ video: video }).then((stream) => {
                isStreaming.value = true;
                videoRef.value.srcObject = stream;
                });
            }
        }
        function stopStreaming() {
            const stream = videoRef.value.srcObject;
            const tracks = stream.getTracks();
            tracks.map((track) => track.stop());
            isStreaming.value = false;
            src.value = prevSrc;
            predictions.value = [];
        }
        function snapshot() {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            ctx.drawImage(videoRef.value, 0, 0, 200, 200);
            const data = canvas.toDataURL("image/png");
            src.value = data;
        }

        return {imgRef, videoRef, isLoading, isStreaming, predictions, src, detect, openCamera, stopStreaming, snapshot };
    }
}
</script>

<style>

</style>