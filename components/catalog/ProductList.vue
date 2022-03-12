<template>
  <v-row class="space px-16">
    <v-col
      cols="12"
      xs="0"
      sm="6"
      md="4"
      lg="2"
      v-for="(product, i) in products"
      :key="i"
    >
      <CatalogProductItem 
        :title="product.title"
        :subtitle="product.subtitle"
        :price="product.price"
        :img="product.img"
      />
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'ProductList',
  data() {
    return {
      products: [
        { img: 'pr1.png', title: 'Cabbage', subtitle: '1kg', price: '13$' },
        {
          img: 'pr2.png',
          title: "Perry's ice cream",
          subtitle: '1kg',
          price: '23$',
        },
        {title: 'Potato', subtitle: '1kg', price: '17$' },
        {
          img: 'pr4.png',
          title: 'Bundle Pack',
          subtitle: 'Potato, Papaya, Oil',
          price: '40$',
        },
        {
          img: '',
          title: 'Oreo Biscuit',
          subtitle: '270GM',
          price: '20$',
        },
        { img: 'pr6.png', title: 'Papaya', subtitle: '1kg', price: '10$' },
      ],
    }
  },
}
</script>
<style></style>
