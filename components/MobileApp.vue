<template>
  <v-row>
    <v-card
      flat
      color="#E2F2E5"
      class="rounded-xl mtop mbottom mx-10 pa-4 d-none d-md-flex flex-column"
      height="350"
      width="100%"
    >
      <v-row>
        <v-col cols="12" xs="6" sm="6" md="5">
          <v-card
            class="rounded-xl mt-n16 ml-16 mobile"
            outlined
            flat
            height="450"
            width="200"
          >
            <v-img src="/img/mobile.png"></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" xs="6" sm="6" md="7">
          <h1 class="mt-16">Download App</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br />
            Tenetur repellat, beatae itaque laborum reprehenderit vel facere
            <br />
            incidunt commodi id neque!
          </p>
          <v-btn width="150" color="black" dark class="mb-10">
            <v-icon color="white" left>shop</v-icon>
            App Store
          </v-btn>
          <v-btn width="150" color="black" dark class="mb-10">
            <v-icon color="white" left>shop</v-icon>
            Play Market
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-row class="d-lg-none d-md-none d-sm-flex  mb-5 mt-5 flex-row justify-center">
      <v-btn width="150" color="black" dark class="mr-2 mb-10">
        <v-icon color="white" left>fab fa-apple</v-icon>
        App Store
      </v-btn>
      <v-btn width="150" color="black" dark class="ml-2 mb-10">
        <v-icon color="white" left>fab fa-google-play</v-icon>
        Play Market
      </v-btn>
    </v-row>
  </v-row>
</template>
<script>
export default {
  name: 'MobileApp',
}
</script>
<style></style>
