<template>
  <v-row class="mt-10 mb-5">
    <v-col
      cols="12"
      xs="12"
      sm="6"
      md="4"
      v-for="(client, i) in clients"
      :key="i"
    >
      <ReviewsClientsItem
      :rating="client.rating"
      :img="client.img"
      :title="client.title"
      :subtitle="client.subtitle"
      :bio="client.bio"
      />
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'ClientComponent',
  data() {
    return {
      clients: [
        {
          img: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Kareem Benji',
          subtitle: 'CPO on Maqua',
          bio: 'I enjoy using Vuetify',
          rating: 4.5,

        },
        {
          img: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Kareem Benji',
          subtitle: 'CPO on Maqua',
          bio: 'I enjoy using Vuetify',
          rating: 5,
        },
        {
          img: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Kareem Benji',
          subtitle: 'CPO on Maqua',
          bio: 'I enjoy using Vuetify',
          rating: '3.5'
        },
      ],
    }
  },
}
</script>
<style></style>
