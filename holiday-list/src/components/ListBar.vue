<template>
   <ul class="app-ul">
      <li v-for="item in newArr" :key="item.id">
        <p class="ul-p"><van-icon name="fire-o" />待审批</p>
        <div class="ul-list">
          <div>
            <span>申请人</span>
            <span>{{item.name}}</span>
          </div>
          <div>
            <span>加班类型</span>
            <span>{{item.isState}}</span>
          </div>
          <div>
            <span>加班日期</span>
            <span>{{item.time}}</span>
          </div>
          <div>
            <span>加班时数</span>
            <span>{{item.num}}</span>
          </div>
        </div>
      </li>
    </ul>
</template>
<script>
export default {
  computed: {
    newArr () {
      return this.$store.state.newArr
    }
  }
}
</script>
<style lang="scss">
  .app-ul {
    width: 100%;
    li {
      width: 100%;
      height: 100px;
      background: white;
      padding: 0 10px;
      margin: 5px 0;
      .ul-p {
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
      .ul-list {
        width: 100%;
        height: 70px;
        display: flex;
        flex-wrap: wrap;
        div {
          width: 50%;
          height: 35px;
          display: flex;
          align-items: center;
          span {
            width: 100px;
          }
        }
      }
    }
  }
</style>
