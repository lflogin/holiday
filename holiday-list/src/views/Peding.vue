<template>
  <div class="main-conet">
    <Tabqiehuan />
    <ListBar />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import Tabqiehuan from '@/components/Tabqiehuan'
import ListBar from '@/components/ListBar'
export default {
  components: {
    Tabqiehuan,
    ListBar
  },
  created () {
    this.getmock()
    this.$store.commit('tabadd', 0)
  },
  methods: {
    ...mapActions([
      'addaxios'
    ]),
    // 获取数据
    getmock () {
      this.addaxios()
    }
  }
}
</script>
<style lang="scss">
  .main-conet {
    width: 100%;
    .main-nav {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        border: 1px solid green;
        padding: 5px 30px;
      }
      .active {
        background: greenyellow;
        color: white;
      }
    }
  }
</style>
