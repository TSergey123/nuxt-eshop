<template>
  <v-card class="mx-auto rounded-xl" max-width="300" flat outlined>
    <div align="center" justify="center">
      <v-img
        max-height="200"
        max-width="300"
        contain
        :src="bundle_item.img ? `/img/${bundle_item.img}` : `/img/no-image.png`"
      />
    </div>
    <v-card-title>{{ bundle_item.title }}</v-card-title>
    <v-card-title class="grey--text text-grey-darken-1 caption mt-n6">{{
      bundle_item.subtitle
    }}</v-card-title>
    <v-card-title class="mt-n4">{{ bundle_item.price }}</v-card-title>
    <v-card-actions class="mw-2 mt-n4">
      <v-btn
        color="green"
        outlined
        class="mt-n2"
        icon
        add
        :disabled="!this.bundle_item.qty || cart_data.includes(this.bundle_item)"
        @click="decrement"
      >
        <v-icon color="green">remove</v-icon>
      </v-btn>
      <span class="mx-4"
        ><strong>{{ bundle_item.qty }}</strong></span
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
        :disabled="!this.bundle_item.qty || cart_data.includes(this.bundle_item)"
        @click="addToCart"
        ><v-icon dark>local_mall</v-icon></v-btn
      >
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'PackItem',
  props: {
    bundle_item: {
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
    this.$set(this.bundle_item, 'qty', 1)
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.bundle_item)
    },
    increment() {
      this.bundle_item.qty++
    },
    decrement() {
      this.bundle_item.qty--
    },
  },
}
</script>
<style></style>
