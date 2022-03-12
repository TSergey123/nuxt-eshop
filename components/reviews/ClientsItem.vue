<template>
  <v-card class="elevation-1 mx-auto" width="300">
    <v-list subheader two-line>
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="img" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ title }}</v-list-item-title>
          <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-card-text>
      <div class="mt-n7">
        <v-rating
          v-model="rating"
          color="yellow darken-1"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          hover
          readonly
        ></v-rating>
      </div>
      {{ bio }}
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'ClientComponent',
  props: {
    rating: {
      type: Number,
    },
    img: {
      type: String,
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    bio: {
      type: String,
    },
  },
}
</script>
<style></style>
