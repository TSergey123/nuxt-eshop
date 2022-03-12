<template lang="">
  <v-footer dark padless>
    <v-card flat tile class="black white--text py-12 px-5" width="100%">
      <v-row class="d-flex flex-row justify-center">
        <v-row class="d-flex flex-row justify-center">
          <v-col cols="7" lg="3" md="3" sm="5" xs="6">
            <nuxt-link to="/">
              <v-toolbar color="transparent" flat>
                <v-badge color="#D5F0DV">
                  <v-img src="/img/1.png" contain width="30"></v-img>
                </v-badge>
                <v-toolbar-title class="ml-4">
                  <span class="green--text"><strong>Grocery</strong></span>
                </v-toolbar-title>
              </v-toolbar>
            </nuxt-link>
          </v-col>
          <v-col cols="7" lg="3" md="3" sm="5" xs="6">
            <v-toolbar style="border: 1px solid green" color="transparent" flat>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-1 white--text icon fab outlined small"
              >
                <v-icon size="20px">{{ icon }}</v-icon>
              </v-btn>
            </v-toolbar>
          </v-col>
        </v-row>
      </v-row>
      <v-row class="d-flex flex-row justify-center">
        <v-col cols="4" xs="2" sm="3" md="2">
          <v-card-text class="white--text pt-0">
            <h3>About</h3>
          </v-card-text>
          <v-card-text class="d-flex align-self-center grey--text"
            >How it work</v-card-text
          >
          <v-card-text class="grey--text mt-n4">Our programs</v-card-text>
          <v-card-text class="grey--text mt-n4">Promotions</v-card-text>
          <v-card-text class="grey--text mt-n4">Refer A Friend</v-card-text>
        </v-col>
        <v-col cols="4" xs="2" sm="3" md="2">
          <v-card-text class="white--text pt-0">
            <h3>Delivery</h3>
          </v-card-text>
          <v-card-text class="grey--text">Const on delivery</v-card-text>
          <v-card-text class="grey--text mt-n4">Payment Method</v-card-text>
          <v-card-text class="grey--text mt-n4">Delivery Astus</v-card-text>
          <v-card-text class="grey--text mt-n4">Returns</v-card-text>
        </v-col>
        <v-col cols="4" xs="2" sm="3" md="2">
          <v-card-text class="white--text pt-0">
            <h3>Contact</h3>
          </v-card-text>
          <v-card-text class="grey--text">Toporkov Sergey</v-card-text>
          <v-card-text class="grey--text mt-n4">+79161031712</v-card-text>
          <v-card-text class="grey--text mt-n4"
            >ToporkovSergeyDev.com</v-card-text
          >
          <v-card-text class="grey--text mt-n4">LinkedIn</v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      icons: [
        'fab fa-apple',
        'fab fa-google-plus-g',
        'fab fa-twitter',
        'fab fa-facebook-f',
      ],
    }
  },
}
</script>
<style></style>
