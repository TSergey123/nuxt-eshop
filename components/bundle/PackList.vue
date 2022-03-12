<template>
  <v-row justify="center" class="space px-16 pb-5">
    <v-col cols="12" xs="12" sm="6" md="4" v-for="(pack, i) in packs" :key="i">
      <BundlePackItem 
      :img="pack.img"
      :title="pack.title"
      :subtitle="pack.subtitle"
      :price="pack.price"
      />
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'PackList',
  data() {
    return {
      packs: [
        {
          img: 'p1.png',
          title: 'Medium Box',
          subtitle: 'Tomato, Cabbage, Oil, Cauliflower',
          price: '55$',
        },
        {
          img: 'p2.png',
          title: 'Big Pack',
          subtitle: 'Tomato, Cabbage, Oil, Cauliflower',
          price: '55$',
        },
        {
          img: 'p3.png',
          title: 'Small Pack',
          subtitle: 'Tomato, Cabbage, Oil, Cauliflower',
          price: '55$',
        },
        {
          img: 'p4.png',
          title: 'Medium Pack',
          subtitle: 'Tomato, Cabbage, Oil, Cauliflower',
          price: '55$',
        },
        {
          img: 'p5.png',
          title: 'Medium Pack',
          subtitle: 'Tomato, Cabbage, Oil, Cauliflower',
          price: '55$',
        },
        {
          img: 'p6.png',
          title: 'Medium Pack',
          subtitle: 'Tomato, Cabbage, Oil, Cauliflower',
          price: '55$',
        },
      ],
    }
  },
}
</script>
<style></style>
