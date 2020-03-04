<template>
  <div>
    <button
      type="button"
      class="block text-gray-500 hover:text-gray-600 focus:text-white focus:outline-none"
    >
      <IconClose class="hover:bg-gray-300 rounded" />
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
