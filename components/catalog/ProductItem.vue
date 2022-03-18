<template>
  <v-card class="mx-auto rounded-xl" max-width="300" height="320" flat outlined>
    <div align="center" justify="center">
      <v-img
        max-height="125"
        max-width="250"
        contain
        :src="!product.img ? `/img/no-image.png` : `/img/${product.img}`"
      ></v-img>
    </div>
    <v-card-title style="font-size: 15px">{{ product.title }}</v-card-title>
    <v-card-title class="grey--text text-grey-darken-1 caption mt-n6">{{
      product.subtitle
    }}</v-card-title>
    <v-card-title class="mt-n4">{{ product.price }}$</v-card-title>
    <v-card-actions class="mw-2 mt-n4">
      <v-btn
        color="green"
        outlined
        class="mt-n2"
        icon
        add
        :disabled="!this.product.qty || cart_data.includes(this.product)"
        @click="decrement"
      >
        <v-icon color="green">remove</v-icon>
      </v-btn>
      <span class="mx-2"
        ><strong>qty:{{ product.qty }}</strong></span
      >
      <v-btn color="green" outlined class="mt-n2" icon add @click="increment">
        <v-icon color="green">add</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        outlined
        icon
        rounded
        color="green"
        dark
        class="mt-n2"
        :disabled="!this.product.qty || cart_data.includes(this.product)"
        @click="addToCart"
        ><v-icon dark>local_mall</v-icon></v-btn
      >
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
    cart_data: {
      type: Array,
    },
  },
  mounted() {
    this.$set(this.product, 'qty', 1)
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product)
    },
    increment() {
      this.product.qty++
    },
    decrement() {
      this.product.qty--
    },
  },
}
</script>
<style></style>
