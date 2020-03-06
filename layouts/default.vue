<template>
  <div>
    <NavbarMain />
    <nuxt
      v-touch:swipe="swipeHandler"
      class="page-leave-active page-leave-to"
    />
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
