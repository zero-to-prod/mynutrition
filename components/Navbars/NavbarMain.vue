<template>
  <header class="bg-gray-900">
    <div
      class="sm:flex items-center justify-between align-items-center py-3 px-2"
    >
      <div class="flex justify-between sm:w-1/3 ">
        <nuxt-link to="/" class="sm:block py-2"
          ><TextLogo config="NavbarMain"
        /></nuxt-link>
        <div class="sm:hidden py-1">
          <ButtonHamburger
            v-show="!main_nav_visible"
            type="button"
            v-on:click.native="toggleMainNav"
            class="flex justify-end"
          />
          <ButtonClose
            v-show="main_nav_visible"
            type="button"
            v-on:click.native="toggleMainNav"
            class="flex justify-end"
          />
        </div>
      </div>

      <div class="text-gray-100 text-center">
        <div
          :class="main_nav_visible ? 'block' : 'hidden'"
          class="sm:block sm:flex text-center"
        >
          <nuxt-link to="/products" :class="class_link">Products</nuxt-link>
          <nuxt-link to="/products" :class="class_link">Kits</nuxt-link>
          <nuxt-link to="/products" :class="class_link"
            >Subscriptions</nuxt-link
          >
        </div>
      </div>
      <div
        class="w-1/3 sm:block"
        :class="main_nav_visible ? 'hidden' : 'block'"
      ></div>
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
    return {
      main_nav_visible: false,
      class_link:
        'block text-gray-100 hover:bg-gray-800 sm:px-1 sm:px-4 px-2 rounded text-center sm:py-2 py-4'
    }
  },
  methods: {
    toggleMainNav() {
      this.main_nav_visible = !this.main_nav_visible
    }
  },
  watch: {
    $route(to, from) {
      this.main_nav_visible = false
    }
  }
}
</script>
