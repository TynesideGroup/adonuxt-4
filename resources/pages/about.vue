<template>
  <section class="container">
    <h1>This page is loaded from the {{ name }}</h1>
    <h2 v-if="isClient">Refresh the page to view server-side rendering.</h2>
    <nuxt-link :to="{ name: 'index' }">Home</nuxt-link>
  </section>
</template>

<script>
  export default {
    name: 'page-about',

    head () {
      return {
        title: `About (rendered ${this.name}-side)`
      }
    },

    data: () => ({
      name: ''
    }),

    asyncData: ({ isClient }) => ({
      name: isClient ? 'client' : 'server'
    }),

    computed: {
      isClient () {
        return this.name === 'client'
      }
    }
  }
</script>
