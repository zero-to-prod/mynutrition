<template>
  <div>
    <TextLogo />
    <Tagline />
  </div>
</template>
<script>
import TextLogo from '~/components/TextLogo/TextLogo.vue'
import Tagline from '~/components/TextLogo/TextLogoTagline.vue'
export default {
  components: {
    TextLogo,
    Tagline
  },
  name: 'TextLogoFull'
}
</script>
<style scoped></style>
