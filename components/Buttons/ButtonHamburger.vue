<template>
  <div class="hover:bg-gray-800 rounded">
    <button
      type="button"
      class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
    >
      <IconHamburger />
    </button></div
></template>
<script>
import IconHamburger from '~/components/Icons/IconHamburger'
export default {
  name: 'ButtonHamburger',
  components: {
    IconHamburger
  }
}
</script>
<style scoped></style>
