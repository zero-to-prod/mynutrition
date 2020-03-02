<template>
  <div class="container">
    <div>
      <h1 class="title">Product Page</h1>
    </div>
    <div>
      <label>
        <input type="text" v-model="product_id" />
      </label>
      <button @click="onLoadProduct">Load Product</button>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  data() {
    return {
      product_id: ''
    }
  },
  components: {
    Logo
  },
  methods: {
    onLoadProduct() {
      this['$router'].push('/products/' + this.product_id)
    }
  }
}
</script>
s
