<template>
  <v-card class="mx-auto rounded-xl" style="margin-top: 0" height="30rem" flat>
            <v-img src="/img/cover2.png" height="100%" max-width="100%">
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
                      color="green"
                      rounded
                      dark
                      x-large
                      class="py-7 d-none d-sm-none d-md-flex"
                      >search</v-btn
                    >
                  </v-col>
                </v-row>
              </v-card-text>
            </v-img>
          </v-card>
</template>
<script>
export default {
  name: 'HeaderComponent'
}
</script>
<style>
</style>
