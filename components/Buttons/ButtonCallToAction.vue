<template>
  <div>
    <button
      class="bg-blue-700 transform sm:scale-90 text-gray-100 p-4 shadow-md rounded-lg my-10 text-xl hover:shadow-lg hover:bg-blue-600 transform hover:scale-105 transition duration-150 "
    >
      <nuxt-link :to="route">{{ buttonText }}</nuxt-link>
    </button>
  </div>
</template>
<script>
export default {
  name: 'ButtonCallToActionOrder',
  props: {
    route: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: ''
    }
  }
};
</script>
<style scoped></style>
