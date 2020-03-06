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
      if (direction === 'right' && this.isMobile) {
        this.$router.go(-1);
      }
    }
  }
};
</script>
