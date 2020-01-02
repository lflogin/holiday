<template>
  <div class="gosend">
    <p class="detail-p">
      <van-nav-bar
        title="公司加班申请表"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </p>
    <p>申请人姓名：<span>{{newArr.name}}</span></p>
    <p>直接主管： <span></span></p>
    <div class="detail-send">
      <h3 class="detail-h3">申请信息</h3>
      <ul class="detail-ul">
        <li>
            <span class="demonstration">加班日期</span>
            <span>{{newArr.time}}</span>
        </li>
        <li>
          <span>加班类型</span>
          <span>{{newArr.isState}}</span>
        </li>
        <li>
          <span>加班起始时间</span>
          <span>{{newArr.time+'/'+newArr.starttime}}</span>
        </li>
        <li>
          <span>加班截止时间</span>
          <span>{{newArr.time+'/'+newArr.endtime}}</span>
        </li>
        <li>
          <span>共计时数</span>
          <span>2</span>
        </li>
      </ul>
    </div>
    <div class="detail-ife">
      <h3>加班事由</h3>
      <p>{{newArr.regson}}</p>
    </div>
    <div class="detail-btn">
      <el-button>退回</el-button>
      <el-button type="primary" @click="submititem">同意</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newArr: {}
    }
  },
  created () {
    this.getdetail()
  },
  methods: {
    getdetail () {
      this.$http.get('/api/detail', {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        console.log(res.data)
        this.newArr = res.data
      })
    },
    submititem () {
      console.log(1)
    },
    // 点击返回上一级
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss">
  .gosend {
    width: 100%;
    height: 100%;
  }
  .detail-p {
    width: 100%;
    height: 50px;
  }
  .detail-send {
    width: 100%;
  }
  .detail-h3 {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid;
  }
  .detail-ul {
    width: 100%;
    padding: 0 10px;
    li {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .detail-ife {
    width: 100%;
    h3 {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid;
    }
    p {
      width: 100%;
      height: 50px;
    }
  }
  .detail-btn {
    width: 100%;
    height: 50px;
    display: flex;
    button {
      flex: 1;
      height: 100%;
    }
  }
</style>
