<template>
  <header
    class="items-center hover:shadow-md hover:bg-gray-100 sm:shadow-md transition duration-150 sm:block flex justify-between p-3"
  >
    <div class="items-center w-32 sm:w-full">
      <div class="sm:flex sm:justify-between items-center m-auto">
        <nuxt-link to="/" class=""
          ><TextLogo config="NavbarMain" class="text-gray-600"
        /></nuxt-link>
        <div class="hidden sm:flex hover:bg-gray-300 rounded p-2">
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
    </div>

    <div
      :class="main_nav_visible ? 'sm:block' : 'sm:hidden'"
      class="justify-center items-center flex sm:w-full"
    >
      <nuxt-link to="/order" :class="class_link">Custom PRE-WORKOUT</nuxt-link>
      <nuxt-link to="/subscriptions" :class="class_link"
        >Subscriptions</nuxt-link
      >
      <nuxt-link to="/products" :class="class_link">Products</nuxt-link>
    </div>
    <div class="sm:hidden w-32 box-border"></div>
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
        'transform p-3 text-gray-700 hover:scale-110 block transition duration-150 hover:bg-gray-300 rounded text-center'
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
  },
  onResize() {
    this.windowHeight = window.innerHeight;
  }
};
</script>
