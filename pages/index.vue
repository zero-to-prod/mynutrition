<template>
  <div
    class="sm:text-center p-6 sm:p-2 pt-20 banner bg-center bg-cover bg-no-repeat h-screen"
  >
    <div class="inline-block my-20 sm:mt-10 max-w-5xl m-auto">
      <TextLogo class="bg-gray-200 p-4 pt-0 rounded-lg transform sm:scale-75" />
      <ButtonCallToAction route="/order" buttonText="Customize PRE-WORKOUT" />
    </div>
  </div>
</template>

<script>
import TextLogo from '~/components/TextLogo/TextLogoFull.vue';
import NavbarMain from '~/components/Navbars/NavbarMain.vue';
import ButtonCallToAction from '~/components/Buttons/ButtonCallToAction';
export default {
  components: {
    TextLogo,
    NavbarMain,
    ButtonCallToAction
  }
};
</script>
<style>
.banner {
  background-image: url('~assets/images/1.png');
}
</style>
