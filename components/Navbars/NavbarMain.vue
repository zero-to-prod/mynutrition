<template>
  <header class="bg-gray-900">
    <div class="flex items-center justify-between align-items-center py-3 px-2">
      <nuxt-link to="/" class="w-1/3"
        ><TextLogo config="NavbarMain"
      /></nuxt-link>
      <div class="text-gray-100 w-1/3 text-center">
        <nuxt-link to="products" class="text-xl">Products</nuxt-link>
      </div>
      <ButtonHamburger
        v-show="!main_nav_visible"
        type="button"
        v-on:click.native="toggleMainNav"
        class="w-1/3 flex justify-end"
      />
      <ButtonClose
        v-show="main_nav_visible"
        type="button"
        v-on:click.native="toggleMainNav"
        class="w-1/3 flex justify-end"
      />
    </div>

    <div :class="main_nav_visible ? 'block' : 'hidden'" class="px-2 pt-2 pb-6">
      <nuxt-link
        to="products"
        class="block text-gray-100 hover:bg-gray-800 px-2 rounded text-center py-4"
        >Products</nuxt-link
      >
      <nuxt-link
        to="products"
        class="block text-gray-100 hover:bg-gray-800 px-2 rounded  text-center mt-1 py-4"
        >Products</nuxt-link
      >
      <nuxt-link
        to="products"
        class="block text-gray-100 hover:bg-gray-800 px-2 rounded  text-center mt-1 py-4"
        >Products</nuxt-link
      >
    </div>
  </header>
</template>

<script>
import TextLogo from '~/components/TextLogo/TextLogo'
import ButtonHamburger from '~/components/Buttons/ButtonHamburger.vue'
import ButtonClose from '~/components/Buttons/ButtonClose.vue'
export default {
  name: 'NavbarMain',
  components: {
    TextLogo,
    ButtonHamburger,
    ButtonClose
  },
  data() {
    return { main_nav_visible: false }
  },
  methods: {
    toggleMainNav() {
      this.main_nav_visible = !this.main_nav_visible
    }
  }
}
</script>
