<template>
  <v-container>
   <CartList
   :cart_data="CART"
   
   />
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CartPage',
  computed: {
    ...mapGetters({
      CART: 'purchases/CART',
    }),
  },
 
}
</script>
<style></style>
