<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col class="pt-0 pl-0 pr-0" cols="12">
          <Header />
          <v-toolbar flat color="transparent">
            <v-toolbar-title class="text-h6"
              ><strong>Category</strong></v-toolbar-title
            >
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="toggle_exclusive" group color="#49D9A0">
              <v-btn><v-icon>chevron_left</v-icon></v-btn>
              <v-btn><v-icon>chevron_right</v-icon></v-btn>
            </v-btn-toggle>
          </v-toolbar>
          <DepartmentsCategoryList />
          <v-toolbar flat color="transparent" class="mt-5">
            <v-toolbar-title class="text-h6">Popular Product</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn rounded color="green" dark class="px-8">See All</v-btn>
          </v-toolbar>
          <CatalogProductList />
          <v-card flat color="#E2F2E5" class="rounded-xl mt-8">
            <v-toolbar flat color="transparent" class="mb-4">
              <v-toolbar-title class="text-h6 mt-5"
                >Popular Bundle Pack</v-toolbar-title
              >
            </v-toolbar>
            <BundlePackList />
          </v-card>
          <v-card flat color="#FAFAFA" class="mt-8 py-5 px-16">
            <div class="absolute-item">
              <h3>What Our Client need Say</h3>
            </div>
            <ReviewsClientsList />
          </v-card>
          <v-toolbar flat color="transparent" class="mt-8">
            <v-toolbar-title class="text-h6">
              Our Trusted Partners
            </v-toolbar-title>
          </v-toolbar>
          <CooperationPartnersList />
          <MobileApp />
        </v-col>
        
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      toggle_exclusive: 1,
    }
  },
}
</script>

<style></style>
