<template>
  <v-app>
    <NavBar />
    <nuxt style="height: 100%" />
    <Footer />
  </v-app>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer,
  }
}
</script>
<style>
</style>
