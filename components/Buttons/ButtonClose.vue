<template>
  <div>
    <button
      type="button"
      class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
    >
      <IconClose />
    </button></div
></template>
<script>
import IconClose from '~/components/Icons/IconClose'
export default {
  name: 'ButtonClose',
  components: {
    IconClose
  }
}
</script>
<style scoped></style>
