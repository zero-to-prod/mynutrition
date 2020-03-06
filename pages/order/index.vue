<template>
  <div v-touch:swipe="swipeHandler">
    <h1 class="text-5xl text-center font-light">Order</h1>
  </div>
</template>

<script>
export default {
  transition: 'default',
  methods: {
    swipeHandler(direction) {
      if (direction === 'left') {
        this.$router.push('/subscriptions'); // May be left / right / top / bottom
      }
    }
  }
};
</script>
