<template>
  <div class="home container">
    <div class="row mt-5">
      <div class="col text-center">
        <h1>Welcome to Gregslist please select your collection to look at</h1>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col text-center">
      <router-link :to="{name: 'Cars'}" class="btn btn-secondary m-2 p-2 px-4">Cars</router-link>
      <router-link :to="{name: 'Houses'}" class="btn btn-secondary m-2 p-2 px-4">Houses</router-link>
      <router-link :to="{name: 'Jobs'}" class="btn btn-secondary m-2 p-2 px-4">Jobs</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  setup() {
    return {

    }
  },
  components: {
  }
}
</script>
