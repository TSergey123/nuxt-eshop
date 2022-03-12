<template>
  <v-card class="mx-auto rounded-xl" max-width="300" height="320" flat outlined>
    <div align="center" justify="center">
      <v-img
        max-height="125"
        max-width="250"
        contain
        :src="`/img/${img}`"
      ></v-img>
      <v-img
        v-if="!img.length"
        max-height="125"
        max-width="250"
        contain
        :src="`/img/no-image.png`"
      ></v-img>
    </div>
    <v-card-title style="font-size:15px">{{ title }}</v-card-title>
    <v-card-title class="grey--text text-grey-darken-1 caption mt-n6">{{
      subtitle
    }}</v-card-title>
    <v-card-title class="mt-n4">{{ price }}</v-card-title>
    <v-card-actions class="mw-2 mt-n4">
      <v-btn color="green" outlined class="mt-n2" icon add :disabled="!count" @click="decrement">
        <v-icon color="green">remove</v-icon>
      </v-btn>
      <span class="mx-2"
        ><strong>{{ count }}</strong></span
      >
      <v-btn color="green" outlined class="mt-n2" icon add @click="increment">
        <v-icon color="green">add</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn outlined icon rounded color="green" dark class="mt-n2"
        ><v-icon dark>local_mall</v-icon></v-btn
      >
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'ProductItem',
  props: {
    title: {
      type: String,
    },
    price: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    img: {
      type: String,
      default: 'no-image.png',
    },
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count += 1
    },
    decrement() {
      this.count -= 1
    },
  },
}
</script>
<style></style>
