<template>
  <div class="home">
    <HeaderBar />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

import HeaderBar from '@/components/HeaderBar'
export default {
  components: {
    HeaderBar
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

</style>
