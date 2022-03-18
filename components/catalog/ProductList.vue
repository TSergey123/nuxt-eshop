<template>
  <v-row class="space px-16">
    <v-col
      v-for="product in product_data"
      :key="product.id"
      cols="12"
      xs="0"
      sm="6"
      md="4"
      lg="2"
    >
      <CatalogProductItem
        :cart_data="cart_data"
        :product="product"
        @addToCart="addToCart"
      />
    </v-col>
  </v-row>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'ProductList',
  props: {
    product_data: {
      type: Array,
      default() {
        return []
      },
    },
    cart_data: {
      type: Array,
    },
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
