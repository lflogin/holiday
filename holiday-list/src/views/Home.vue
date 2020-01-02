<template>
  <div class="home">
    <HeaderBar v-show="head" />
    <main class="main">
      <router-view />
    </main>
    <div class="task" @click="sendbtn" v-show="head">
      发起任务
    </div>
    <Poput v-show="ishsow" @nonepoput="nonepoput"/>
  </div>
</template>
<script>
// @ is an alias to /src

// 头部组件
import HeaderBar from '@/components/HeaderBar'
// 弹框组件
import Poput from '@/components/Poput'
export default {
  components: {
    HeaderBar,
    Poput
  },
  data () {
    return {
      head: true,
      ishsow: false
    }
  },
  watch: {
    // 监听如果跳转到填表页面就隐藏头部tab
    '$route' (to, from) {
      // console.log(to,'-------------home')
      if (to.name === 'detail' || to.name === 'gosend' || to.name === 'rightdetail') {
        this.head = false
      } else {
        this.head = true
      }
    }
  },
  methods: {
    // 点击发起任务 显示弹框
    sendbtn () {
      this.ishsow = true
    },
    // 接受子组件传参
    nonepoput (v) {
      this.ishsow = v
    }
  }
}
</script>
<style lang="scss">
  .home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .main {
    width: 100%;
    flex: 1;
    overflow: auto;
    background: #cccccc;
  }
  .task {
    width: 150px;
    height: 50px;
    border: 1px solid;
    position:fixed;
    bottom: 0;
    right: 0;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: green;
    color: white;
    font-size: 20px;
  }
</style>
