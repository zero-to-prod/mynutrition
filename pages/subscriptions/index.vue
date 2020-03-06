<template>
  <div v-touch:swipe="swipeHandler">
    <h1 class="text-5xl text-center font-light h-screen">Subscriptions Page</h1>
  </div>
</template>

<script>
export default {
  methods: {
    swipeHandler(direction) {
      if (direction === 'left' && this.isMobile) {
        this.$router.push(this.route_products);
      }
    }
  }
};
</script>
