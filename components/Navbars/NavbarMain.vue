<template>
  <header
    class="items-center hover:shadow-md sm:shadow-md transition duration-150 sm:block flex justify-around p-3"
  >
    <div class="w-32 sm:w-full">
      <div class="sm:flex sm:justify-between items-center">
        <nuxt-link :to="route_home" class=""
          ><TextLogo config="NavbarMain" class="text-gray-600"
        /></nuxt-link>
        <div class="hidden sm:flex hover:bg-gray-300 rounded p-2">
          <ButtonHamburger
            v-show="!main_nav_visible"
            type="button"
            v-on:click.native="toggleMainNav"
          />
          <ButtonClose
            v-show="main_nav_visible"
            type="button"
            v-on:click.native="toggleMainNav"
          />
        </div>
      </div>
    </div>

    <div
      :class="main_nav_visible ? 'sm:block' : 'sm:hidden'"
      class="flex text-center"
    >
      <nuxt-link
        :to="route_order"
        v-on:click.native="main_nav_visible = false"
        :class="class_link"
        >PRE-WORKOUT</nuxt-link
      >
      <nuxt-link
        :to="route_subscriptions"
        v-on:click.native="main_nav_visible = false"
        :class="class_link"
        >Subscriptions</nuxt-link
      >
      <nuxt-link
        :to="route_products"
        v-on:click.native="main_nav_visible = false"
        :class="class_link"
        >Products</nuxt-link
      >
    </div>
    <div class="sm:hidden w-32"></div>
  </header>
</template>

<script>
import TextLogo from '~/components/TextLogo/TextLogo';
import ButtonHamburger from '~/components/Buttons/ButtonHamburger.vue';
import ButtonClose from '~/components/Buttons/ButtonClose.vue';
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
        'transform hover:scale-110 transition duration-150 rounded px-2 py-3 text-gray-700 sm:block hover:bg-gray-300'
    };
  },
  mounted() {
    document.addEventListener('keydown', e => {
      if (e.keyCode === 27) {
        this.main_nav_visible = false;
      }
    });
  },
  methods: {
    toggleMainNav() {
      this.main_nav_visible = !this.main_nav_visible;
    }
  },
  watch: {
    $route(to, from) {
      this.main_nav_visible = false;
    }
  }
};
</script>
