<template>
  <div>
    <button
      type="button"
      class="block text-gray-500 hover:text-gray-600 focus:text-white focus:outline-none"
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
