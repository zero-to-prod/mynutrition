<template>
  <div v-touch:swipe="swipeHandler">
    <div>
      <h1 class="text-5xl text-center font-light h-screen">Product Page</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product_id: ''
    };
  },
  methods: {
    swipeHandler(direction) {
      if (direction === 'left') {
        this.$router.push(this.route_home);
      }
    }
  }
};
</script>
