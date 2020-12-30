<template>
  <div
    class="fixed bg-green-500 w-full p-4 flex flex-reverse justify-between items-center"
  >
    <div class="invisible"></div>
    <div class="text-white font-semibold text-xl text-center">
      {{ title }}
    </div>
    <div class="w-6 text-white">
      <router-link :to="{ name: 'Home' }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppNav",
  props: {
    title: String,
  },
};
</script>
