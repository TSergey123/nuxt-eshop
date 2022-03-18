<template>
  <v-row justify="center" class="space px-16 pb-5">
    <v-col
      cols="12"
      xs="12"
      sm="6"
      md="4"
      v-for="(pack, i) in bundle_data"
      :key="i"
    >
      <BundlePackItem
        :bundle_item="pack"
        :cart_data="cart_data"
        @addToCart="addToCart"
      />
    </v-col>
  </v-row>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'PackList',
   props: {
    bundle_data: {
      type: Array,
      default() {
        return []
      },
    },
    cart_data: {
      type: Array,
    },
    increment: {
      type: Function,
    }
  },
  methods: {
  ...mapActions({
    ADD_TO_CART: 'purchases/ADD_TO_CART',
  }),
  addToCart(data) {
      this.ADD_TO_CART(data)
    },
  },
}
</script>
<style></style>
