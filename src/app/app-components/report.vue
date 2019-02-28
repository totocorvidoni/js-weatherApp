<template>
  <div id="report">
    <div v-if="loading">
      <span>loading...</span>
    </div>
    <ul v-else>
      <li v-for="value in info">{{ value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
    loading: Boolean
  }
};
</script>

<style lang="sass">

</style>
