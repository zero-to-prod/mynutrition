<template>
  <div>
    <NavbarMain />
    <nuxt v-touch:swipe="swipeHandler" />
  </div>
</template>
<script>
import NavbarMain from '~/components/Navbars/NavbarMain.vue';
export default {
  transition: 'default',
  components: {
    NavbarMain
  },
  head: {
    bodyAttrs: {
      class: 'bg-gray-100'
    }
  },
  methods: {
    swipeHandler(direction) {
      console.log(direction);
      if (direction === 'right') {
        this.$router.go(-1);
      }
    }
  }
};
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 150ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
