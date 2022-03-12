<template>
  <v-card class="mx-auto rounded-xl" max-width="300" flat outlined>
    <div align="center" justify="center">
      <v-img max-width="300" max-height="300" :src="`/img/${img}`" />
    </div>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-title class="grey--text text-grey-darken-1 caption mt-n6">{{
      subtitle
    }}</v-card-title>
    <v-card-title class="mt-n4">{{ price }}</v-card-title>
    <v-card-actions class="mw-2 mt-n4">
      <v-btn
        color="green"
        outlined
        class="mt-n2"
        icon
        add
        :disabled="!count"
        @click="decrement"
      >
        <v-icon color="green">remove</v-icon>
      </v-btn>
      <span class="mx-4"
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
  name: 'PackItem',
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    img: {
      type: String,
    },
    price: {
      type: String,
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
      this.count -= +1
    },
  },
}
</script>
<style></style>
