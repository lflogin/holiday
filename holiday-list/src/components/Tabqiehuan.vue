<template>
    <div class="main-nav">
      <span v-for="(item,index) in arr" :key="index"
        :class="{active :index===ind}"
        @click="handletab(index)"
      >
        {{item}}
      </span>
    </div>
</template>
<script>
export default {
  computed: {
    arr() {
      return this.$store.state.arr
    },
    ind() {
      return this.$store.state.ind
    }
  },

  methods: {
    handletab(index) {
      // console.log(index,'--------------')
      this.$store.commit('tabadd',index)
    }
  },
}
</script>
<style lang="scss">
  
</style>