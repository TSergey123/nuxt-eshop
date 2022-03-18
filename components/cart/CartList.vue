<template>
  <v-row>
    <v-col v-for="(cart, index) in cart_data" :key="cart.id" cols="12" xs="6" sm="6" md="6" lg="2" align="center">
      <CartItem
        :cart_data="cart"
        @deleteFromCart="deleteFromCart(index)"
      />
    </v-col>
  </v-row>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'CartList',
  props: {
    cart_data: {
      type: Array,
    },
  },
  methods: {
    ...mapActions({
      DELETE_FROM_CART: 'purchases/DELETE_FROM_CART',
    }),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    },
    clearDublicateProducts(array) {
      return array.filter(
        (v, i, a) => a.findIndex((t) => t.title === v.title) === i
      )
    },
  },
}
</script>
<style></style>
