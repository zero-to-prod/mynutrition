<template>
  <div>
    <h1 :class="wrapper"><span class="text-blue-700">My</span>Nutrition</h1>
  </div>
</template>

<script>
export default {
  name: 'TextLogo',
  props: {
    config: {
      type: String,
      default: 'Default'
    }
  },
  data() {
    return {
      configurations: {
        Default:
          'text-5xl font-light tracking-tight leading-tight text-gray-900',
        NavbarMain: 'text-2xl font-light tracking-tight leading-tight'
      }
    }
  },
  computed: {
    wrapper() {
      return this.configurations[this.config]
    }
  }
}
</script>
