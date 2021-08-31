<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    console.log("Home.vue", this.$store.state.module)
  }
};
</script>

<style lang="scss">
</style>