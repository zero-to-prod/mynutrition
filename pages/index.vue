<template>
  <div>
    <div
      class="sm:text-center left-1 relative p-6 pt-20 banner bg-local h-full"
    >
      <TextLogo />
      <button
        class="bg-blue-700 text-gray-100 p-4 shadow-md rounded-lg my-10 text-xl hover:shadow-lg hover:bg-blue-600 transform hover:scale-105 transition duration-150 "
      >
        Customize my PRE-WORKOUT
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
