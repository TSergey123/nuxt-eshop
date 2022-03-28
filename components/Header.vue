<template>
  <v-card class="mx-auto rounded-xl" style="margin-top: 0" height="30rem" flat>
    <v-parallax src="/img/cover2.png">
      <v-card-title class="top ml-10">
        <h2 class="title1">Order your</h2>
      </v-card-title>
      <v-card-title class="ml-10 mt-8">
        <h2 class="title1">Daily Groceries</h2>
      </v-card-title>
      <v-card-text class="ml-10">
        <h3 class="green--text">#Free Delivery</h3>
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="Search your daily groceries"
              class="d-none d-sm-none d-md-flex"
              style="z-index: 999"
              filled
              solo
              flat
              rounded
              outlined
              success
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-col>
          <v-col cols="2" class="marginLeft">
            <v-btn
              style="width: fit-content; text-align: right;"
              color="green"
              rounded
              dark
              x-large
              class="ml-4 py-2 d-none d-sm-none d-md-flex flex-row justify-end"
              ><v-icon>fa-solid fa-magnifying-glass</v-icon></v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-parallax>
  </v-card>
</template>
<script>
export default {
  name: 'HeaderComponent',
}
</script>
<style></style>
