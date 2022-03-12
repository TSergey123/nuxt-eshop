<template>
  <v-item-group fixed madatory class="mt-n1">
    <v-container>
      <v-row justify="center" class="space">
        <v-col
          cols="12"
          xs="12"
          sm="4"
          md="2"
          v-for="(category, i) in categories"
          :key="i"
        >
          <DepartmentsCategoryItem 
          :title="category.title"
          :img="category.img"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>
<script>
export default {
  name: 'CategoryList',
  data() {
    return {
      categories: [
        { img: '01.png', title: 'Meat & Fish' },
        { img: '02.png', title: 'Vegetables' },
        { img: '3.png', title: 'Medicine' },
        { img: '4.png', title: 'Baby' },
        { img: '5.png', title: 'Office' },
        { img: '6.png', title: 'Meat Beauty' },
      ],
    }
  },
}
</script>
<style scoped></style>
