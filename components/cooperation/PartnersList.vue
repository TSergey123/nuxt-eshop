<template>
  <v-row class="mt-10 d-flex flex-row justify-center">
    <v-col class="d-flex flex-row justify-center ml-2 mr-2" cols="2" v-for="(partner, i) in partners" :key="i">
      <CooperationPartnersItem
      :img="partner.img"
      />
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'PartnersComponent',
  data() {
    return {
      partners: [
        {
          img: 'airbnb.png'
        },
        {
          img: 'adidas.png'
        },
        {
          img: 'swords.png'
        },
        {
          img: 'castle.png'
        },
      ],
    }
  },
}
</script>
<style>
</style>
