<template>
  <div class="nav">
    <router-link to="/peding">待处理</router-link>
    <router-link to="/sent">已发起</router-link>
    <router-link to="/processed">已处理</router-link>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .nav {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
     a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  }
</style>