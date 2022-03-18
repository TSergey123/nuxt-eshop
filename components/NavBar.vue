<template>
  <v-app-bar elevation="5" max-height="10%">
    <nuxt-link class="d-flex flex-row" to="/">
      <v-badge color="#D5F0DB" dot>
        <v-img src="/img/1.png" contain width="30" />
      </v-badge>
      <v-toolbar-title class="ml-4">
        <span class="green--text">e</span
        ><strong class="green--text">Grocery</strong>
      </v-toolbar-title>
    </nuxt-link>
    <v-spacer></v-spacer>
    <v-badge color="#D5F0DB" overlap content="2" class="mr-2 mt-1">
      <v-avatar color="#FFF0EE" border="red" size="40">
        <v-icon small color="#FF6D59">favorite</v-icon>
      </v-avatar>
    </v-badge>
    <v-badge color="#41AB55" overlap :content="CART.length" class="mr-2 mt-1">
      <nuxt-link :to="{ path: '/cart'}">
        <v-avatar color="#ECF7EE" size="40" border="red">
          <v-icon small color="#41AB55">shopping_cart</v-icon>
        </v-avatar>
      </nuxt-link>
    </v-badge>
    <span class="grey--text d-none d-sm-flex"
      >Hello, <strong>Customer</strong></span
    >
    <v-avatar size="30" class="ml-2">
      <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
    </v-avatar>
    <v-btn icon dark><v-icon large color="#878A94">expand_more</v-icon></v-btn>
  </v-app-bar>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'NavBar',
  computed: {
    ...mapGetters({
      CART: 'purchases/CART',
    }),
  },
}
</script>
<style scoped>
.v-toolbar__title {
  font-size: 1rem !important;
}
</style>
