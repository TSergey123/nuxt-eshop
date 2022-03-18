<template lang="">
  <v-card max-width="300" min-height="380" flat outlined>
    <div style="height: 125px">
      <v-img
        max-height="125"
        max-width="250"
        contain
        :src="!cart_data.img ? `/img/no-image.png` : `/img/${cart_data.img}`"
      ></v-img>
    </div>
    <v-card-title style="font-size: 15px">{{ cart_data.title }}</v-card-title>
    <v-card-title class="grey--text text-grey-darken-1 caption mt-n6">{{
      cart_data.subtitle
    }}</v-card-title>
    <v-card-title class="mt-n4"
      >QTY:<strong>{{ cart_data.qty }}</strong></v-card-title
    >
    <v-card-title class="mt-n4">{{ cart_data.price }}$</v-card-title>
    <v-card-actions class="mw-2 mt-n4">
      <v-btn @click="deleteFromCart" color="green" icon>
        <v-icon>fa-solid fa-trash</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'CartItem',
  props: {
    cart_data: {
      type: Object,
    },
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart')
    },
  },
}
</script>
<style>
.v-responsive__content {
  display: none;
}
</style>
