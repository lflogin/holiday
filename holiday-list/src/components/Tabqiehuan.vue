<template>
    <div class="main-nav">
      <span v-for="(item,index) in arr" :key="index"
        :class="{active :index===ind}"        
        @click="handletab(index)">
        {{item}}
      </span>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    arr: state => state.arr,
    ind: state => state.ind
  }),
  methods: {
    handletab (index) {
      // console.log(index,'--------------')
      this.$store.commit('tabadd', index)
    }
  }
}
</script>
<style lang="scss">
</style>
