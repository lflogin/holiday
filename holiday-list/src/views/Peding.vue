<template>
  <div class="main-conet">
    <div class="main-nav">
      <span v-for="(item,index) in arr" :key="index"
        :class="{active :index===ind}"
        @click="handletab(index)"
      >
        {{item}}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: ['加班','休假'],
      ind: 0
    }
  },

  created() {
    this.getmock()
  },

  methods: {
    handletab(index) {
      console.log(index)
      this.ind = index
    },
    getmock() {
      this.$http.get('/api/list').then(res=>{
        console.log(res.data.tday)
      })
    }
  },

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