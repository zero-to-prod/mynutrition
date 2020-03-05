<template>
  <div
    class="sm:text-center p-6 sm:p-2 pt-20 banner bg-center bg-cover bg-no-repeat "
  >
    <div class="inline-block my-20">
      <TextLogo class="bg-gray-200 p-4 pt-0 rounded-lg transform sm:scale-75" />
      <button
        class="bg-blue-700 m:scale-90 text-gray-100 p-4 shadow-md rounded-lg my-10 sm:my-2 text-xl hover:shadow-lg hover:bg-blue-600 transform hover:scale-105 transition duration-150 "
      >
        <nuxt-link to="/order">Custom PRE-WORKOUT</nuxt-link>
      </button>
    </div>
  </div>
</template>

<script>
import TextLogo from '~/components/TextLogo/TextLogoFull.vue';
import NavbarMain from '~/components/Navbars/NavbarMain.vue';
export default {
  components: {
    TextLogo,
    NavbarMain
  }
};
</script>
<style>
.banner {
  background-image: url('~assets/images/1.png');
}
</style>
