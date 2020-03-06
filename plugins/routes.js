import Vue from 'vue';

Vue.mixin({
  computed: {
    route_home() {
      return '/';
    },
    route_order() {
      return '/order';
    },
    route_subscriptions() {
      return '/subscriptions';
    },
    route_products() {
      return '/products';
    }
  }
});
