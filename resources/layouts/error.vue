<template>
  <section class="container">
    <h1>{{ error.statusCode }}</h1>
    <h2>{{ error.message }}</h2>
    <nuxt-link :to="{ name: 'index' }" v-if="error.statusCode === 404">Home</nuxt-link>
  </section>
</template>

<script>
  export default {
    name: 'layout-error',

    props: ['error']
  }
</script>

<style scoped>
  h1 {
    margin-top: 15px;
    font-size: 5em;
  }

  h2 {
    font-weight: 300;
    color: #9aabb1;
    margin: 0;
  }

  a {
    margin-top: 50px;
  }
</style>
