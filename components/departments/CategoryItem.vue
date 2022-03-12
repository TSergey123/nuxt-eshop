<template>
  <v-item v-slot="{ active, toggle }">
    <v-card
      :color="active ? '#D5F0DB' : '#FFF'"
      :class="active ? 'borderme' : 'borderout'"
      class="d-flex align-center rounded-lg mx-2"
      dark
      height="180"
      flat
      @click="toggle"
    >
      <v-row>
        <v-col cols="12" sm="12">
          <v-list-item three-line class="text-center">
            <v-list-item-content>
              <div align="center" justify="center">
                <v-img
                  :src="`/img/${img}`"
                  max-height="80"
                  max-width="80"
                  contain
                />
              </div>
              <v-list-item-subtitle
                :class="active ? 'green--text' : 'black--text'"
                class="caption mt-4"
                >{{ title }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-card>
  </v-item>
</template>
<script>
export default {
  name: 'CategoryItem',
  props: {
    title: {
      type: String,
    },
    img: {
      type: String,
    }
  },
}
</script>
<style scoped></style>
