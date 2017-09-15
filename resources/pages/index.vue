<template>
  <div>
    <h1>Test page</h1>
    <span>Test message: {{ message }}</span>
  </div>
</template>

<script>
  export default {
    data: () => ({
      message: 'Vue is working!'
    })
  }
</script>
