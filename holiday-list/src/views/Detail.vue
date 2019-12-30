<template>
  <div class="detail">
    <p class="detail-p">办公室调休申请表</p>
    <p>申请人姓名：<input type="text" v-model="user"></p>
    <p>直接主管： <input type="text" v-model="userbox"></p>
    <div>
      <h3>申请信息</h3>
       <div class="block">
       <span class="demonstration">默认</span>
       <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: '',
      userbox: '',
      value1: ''
    }
  },
  watch: {
    value1 (v) {
      console.log(v)
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
  .detail {
    width: 100%;
    height: 100%;
  }
  .detail-p {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-bottom: 1px solid;
  }
</style>
