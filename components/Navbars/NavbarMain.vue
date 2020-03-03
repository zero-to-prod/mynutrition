<template>
  <header
    class="bg-gray-900 flex items-center justify-between align-items-center py-1 px-1"
  >
    <a href="/" class="w-1/3"><TextLogo config="NavbarMain"/></a>
    <div class="text-gray-100 w-1/3 text-center">
      <nuxt-link to="products">Products</nuxt-link>
    </div>
    <ButtonHamburger class="w-1/3 flex justify-end" />
  </header>
</template>

<script>
import TextLogo from '~/components/TextLogo/TextLogo'
import ButtonHamburger from '~/components/Buttons/ButtonHamburger.vue'
export default {
  name: 'NavbarMain',
  components: {
    TextLogo,
    ButtonHamburger
  },
  data() {
    return {}
  }
}
</script>
