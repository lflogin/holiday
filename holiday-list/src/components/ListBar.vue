<template>
   <ul>
      <li v-for="item in newArr" :key="item.id">
        {{item.name}}
      </li>
    </ul>
</template>
<script>
export default {
  computed: {
    newArr() {
      return this.$store.state.newArr
    }
  },
}
</script>
<style lang="scss">
  
</style>