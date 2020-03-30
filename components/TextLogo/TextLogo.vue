<template>
  <div>
    <h1 :class="wrapper">
      <span class="text-blue-700">My</span><span>Nutrition</span>
    </h1>
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
        Default: 'text-5xl font-light text-gray-600',
        NavbarMain: 'text-2xl font-light tracking-tight'
      }
    };
  },
  computed: {
    wrapper() {
      return this.configurations[this.config];
    }
  }
};
</script>
