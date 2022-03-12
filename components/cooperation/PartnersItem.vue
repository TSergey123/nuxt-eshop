<template>
  <v-img :src="`/img/${img}`" max-height="80" max-width="80" contain />
</template>
<script>
export default {
  name: 'PartnersComponent',
  props: {
    img: {
      type: String,
    },
  },
}
</script>
<style></style>
