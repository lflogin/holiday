<template>
  <div class="main-conet">
     <Tabqiehuan />
     <ListBar /> 
  </div>
</template>
<script>
import Tabqiehuan from '@/components/Tabqiehuan'
import ListBar from '@/components/ListBar'
export default {
  computed: {
   
  },
  components: {
      Tabqiehuan,
      ListBar
  },
  created() {
    this.$store.commit('tabadd',0)
  },
}
</script>
<style lang="scss">
  
</style>