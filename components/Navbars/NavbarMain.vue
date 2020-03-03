<template>
  <header
    class="bg-gray-900 flex items-center justify-between align-items-center py-1 px-1"
  >
    <TextLogo config="NavbarMain" />
    <ButtonHamburger />
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
