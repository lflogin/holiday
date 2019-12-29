<template>
  <div class="poput">
    <div class="poput-btn">
      <span @click="gowork">加班</span>
      <span @click="nowork">休班</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    //点击加班
    gowork() {
      //向父组件传递参数
      this.$emit('nonepoput',false)
      //跳转页面
      this.$router.push({
        path: '/detail'
      })
    },
    //点击休班
    nowork() {
       this.$emit('nonepoput',false)
    }
  },
}
</script>
<style lang="scss">
  .poput {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.5);
    .poput-btn {
      width: 100%;
      height: 150px;
      background: white;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      span {
        border: 1px solid #ccc;
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }
    }
  }
</style>