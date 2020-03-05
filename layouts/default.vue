<template>
  <div>
    <NavbarMain />
    <nuxt />
  </div>
</template>
<script>
import NavbarMain from '~/components/Navbars/NavbarMain.vue';
export default {
  components: {
    NavbarMain
  },
  head: {
    bodyAttrs: {
      class: 'bg-gray-100',
      contentType: 'text/html; charset=UTF-8'
    }
  }
};
</script>
